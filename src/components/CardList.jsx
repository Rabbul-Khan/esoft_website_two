const CardList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-20 pt-10 xl:flex-row">
      <div className="shadow card w-96 bg-primary text-primary-content shadow-blue-500 ">
        <div className="card-body">
          <h2 className="text-2xl font-bold card-title">Family</h2>
          <ul className="pl-5">
            <li>○ Customized Succession Planning</li>
            <li>○ Legacy Preservation</li>
            <li>○ Advisory Services</li>
            <li></li>
          </ul>
          <div className="justify-end card-actions">
            <button className="btn">Registration</button>
          </div>
        </div>
      </div>
      <div className="shadow card w-96 bg-primary text-primary-content shadow-blue-500 ">
        <div className="card-body">
          <h2 className="text-2xl font-bold card-title">Enterprise</h2>
          <ul className="pl-5">
            <li>○ Operational Excellence</li>
            <li>○ Financial Management</li>
            <li>○ Digital Transformation</li>
            <li></li>
          </ul>
          <div className="justify-end card-actions">
            <button className="btn">Registration</button>
          </div>
        </div>
      </div>
      <div className="shadow card w-96 bg-primary text-primary-content shadow-blue-500 ">
        <div className="card-body">
          <h2 className="text-2xl font-bold card-title">Family</h2>
          <ul className="pl-5">
            <li>○ Supply Chain Management:</li>
            <li>○ Continuous Improvement</li>
            <li>○ Omnichannel Strategies</li>
            <li></li>
          </ul>
          <div className="justify-end card-actions">
            <button className="btn">Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
