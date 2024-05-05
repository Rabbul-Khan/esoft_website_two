import Header from './components/Header';
import TextSlider from './components/TextSlider';

function App() {
  return (
    <>
      <Header />
      <TextSlider />
      <div className="flex xl:flex-row flex-col items-center justify-center gap-10  pt-20 px-20">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Family</h2>
            <ul className="pl-5">
              <li>○ Customized Succession Planning</li>
              <li>○ Legacy Preservation</li>
              <li>○ Advisory Services</li>
              <li></li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn">Registration</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Enterprise</h2>
            <ul className="pl-5">
              <li>○ Operational Excellence</li>
              <li>○ Financial Management</li>
              <li>○ Digital Transformation</li>
              <li></li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn">Registration</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Family</h2>
            <ul className="pl-5">
              <li>○ Supply Chain Management:</li>
              <li>○ Continuous Improvement</li>
              <li>○ Omnichannel Strategies</li>
              <li></li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn">Registration</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
