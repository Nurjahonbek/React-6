import {DNA} from 'react-loader-spinner'

function Loader() {
  return <div className="loader"><DNA
  visible={true}
  height="300"
  width="300"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  /></div>
}

export default Loader
