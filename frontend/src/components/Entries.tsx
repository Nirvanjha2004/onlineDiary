function Entries() {
    return (
      <div className="ml-52 mr-52 rounded-xl opacity-85"> {/* Changed rounded-md to rounded-xl */}
        <div className="bg-gray-300 pt-6 pr-80 rounded-xl"> {/* Added rounded-xl here as well */}
            <div className="flex justify-between">
                <span className="pl-[60px]">Nirvan's Journal</span>
                <button className="mr-14 bg-green-200 p-2 rounded-3xl font-semibold">Create New</button>
            </div>
          <div className="flex pl-[60px] gap-1">
            <div>1 total entry | </div>
            <div> Created on Date</div>
          </div>
          <div className="flex pb-7">
            <form className="max-w-sm mx-auto">
              <label className="block mt-1 text-sm font-medium text-gray-900">
                Select
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <form className="max-w-sm mx-auto">
              <label className="block mt-1 text-sm font-medium text-gray-900">
                Since
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <form className="max-w-sm mx-auto">
              <label className="block mt-1 text-sm font-medium text-gray-900">
                View
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Entries;
  