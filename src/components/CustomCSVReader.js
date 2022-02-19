import { useContext } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";
import { useCSVReader } from 'react-papaparse';
import { GraphContext } from "../App";
import {
  createLinearModel
} from "../utils/createModels";
import { createLinearFormulae } from "../utils/createFormulae"
import { linearRegression } from "../utils/createRegression";
import { formatCSVdata, formatGraphData } from "../utils/formatters";


const styles = {
  csvReader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    border: "2px solid",
    borderColor: "#aeaeae",
    borderRadius: '32px',
    width: '16rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px'
  },
  browseFile: {
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: '1.6rem',
    color: '#207AC6'
  },
  acceptedFile: {
    border: '1px solid #ccc',
    height: 32,
    lineHeight: 2.5,
    width: '80%',
    textAlign: 'center',
    marginBottom: '4px',
    color: 'white',
    paddingBottom: '4px'
  },
  remove: {
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: '1.6rem',
    color: '#CA3C0077'
  },
  progressBarBackgroundColor: {
    backgroundColor: '#207AC6aa',
  },
};

const CustomCSVReader = () => {

  const { CSVReader } = useCSVReader();
  const { setGraphData, setGraphFormulae } = useContext(GraphContext);


  return (
    <CSVReader

      //coleta dados
      onUploadAccepted={(results) => {

        //transforma firstGraphData
        const firstGraphData = formatCSVdata(results.data);

        //coleta a,b
        const graphFormulae = createLinearModel(firstGraphData);
        const { a, b } = createLinearModel(graphFormulae);
        const formulae = createLinearFormulae(a, b);

        //Regressão 
        const secondGraphData = linearRegression(firstGraphData, a, b);

        //Atualiza graphData
        const graphData = formatGraphData(firstGraphData, secondGraphData);
        setGraphData(graphData)

        //Atualiza graphFormulae
        setGraphFormulae(formulae);





        /*
                  const { a, b } = createLinearModel(graphFormulae);
                  formulae = createLinearFormulae(a, b);
                  const graphFormulae = createLinearModel(results.data);
                  setGraphFormulae(graphFormulae);
             
        
        */

      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div style={styles.csvReader}>

            <button
              type='button'
              {...getRootProps()}
              style={styles.browseFile}
            >
              <FaUpload height={'1000px'} width={'25px'} />
            </button>

            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>

            <button
              {...getRemoveFileProps()}
              style={styles.remove}>
              < FaTimes />
            </button>

          </div>
          <ProgressBar
            style={styles.progressBarBackgroundColor}
          />
        </>
      )}
    </CSVReader>
  );
}

export default CustomCSVReader;