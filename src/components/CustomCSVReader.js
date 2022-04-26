import { useContext } from "react";
import { FaTimes, FaUpload } from "react-icons/fa";
import { useCSVReader } from 'react-papaparse';
import { GraphContext } from "../App";
import { createFittingData } from "../utils/createFittingData";
import {
  createExponencialModel,
  createLinearModel,
  createNormalModel,
  createSigmoidModel
} from "../utils/createModels";
import {
  createExponencialFormulae,
  createLinearFormulae,
  createNormalFormulae,
  createSigmoidFormulae
} from "../utils/createFormulae"
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
  const { setGraphData, setGraphFormulae, graphType } = useContext(GraphContext);


  return (
    <CSVReader
    
    config={{
      
        header: false,
        delimiter: "",
        delimitersToGuess: [',', '	', '\t', '|', ';', '\r', '\n', '"', '\ufeff'],
        dynamicTyping: true,
        comments: "#",
        skipEmptyLines: 'greedy',
        type: "FieldMismatch",
	      code: "TooManyFields",
	      message: "Expected 3 fields, but parsed 4",
	      row: 1
        
      }}
    

      // carrega os dados do csv
      onUploadAccepted={async (results) => {
        
        // encontra a primeira série
        const firstDataSerie = formatCSVdata(results.data);
       

        if (graphType === "Linear") {

          //coleta a,b
          let { a, b, xArray, yArray } = await createLinearModel(firstDataSerie);
          // encontra a segunda série
          let secondDataSerie = createFittingData(xArray, yArray);

          // cria os object graphData -> data: data1, data: data2
          let graphData = formatGraphData(firstDataSerie, secondDataSerie);
          setGraphData(graphData)

          //Atualiza graphFormulae
          let formulae = createLinearFormulae(a, b);
          setGraphFormulae(formulae);

        }

        if (graphType === "Exponencial") {

          //coleta a,b
          let { a, b, xArray, yArray } = await createExponencialModel(firstDataSerie);

          // encontra a segunda série
          let secondDataSerie = createFittingData(xArray, yArray);

          // cria os object graphData -> data: data1, data: data2
          let graphData = formatGraphData(firstDataSerie, secondDataSerie);
          setGraphData(graphData)

          //Atualiza graphFormulae
          let formulae = createExponencialFormulae(a, b);
          setGraphFormulae(formulae);

        }

        if (graphType === "Sigmoid") {

          //coleta a,b
          let { a, b, c, d, xArray, yArray } = await createSigmoidModel(firstDataSerie);

          // encontra a segunda série
          let secondDataSerie = createFittingData(xArray, yArray);

          // cria os object graphData -> data: data1, data: data2
          let graphData = formatGraphData(firstDataSerie, secondDataSerie);
          setGraphData(graphData)

          //Atualiza graphFormulae
          let formulae = createSigmoidFormulae(a, b, c, d);
          setGraphFormulae(formulae);

        }

        if (graphType === "Normal") {

          //coleta a,b
          let { a, b, c, xArray, yArray } = await createNormalModel(firstDataSerie);

          // encontra a segunda série
          let secondDataSerie = createFittingData(xArray, yArray);

          // cria os object graphData -> data: data1, data: data2
          let graphData = formatGraphData(firstDataSerie, secondDataSerie);
          setGraphData(graphData)

          //Atualiza graphFormulae
          let formulae = createNormalFormulae(a, b, c);
          setGraphFormulae(formulae);

        }

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