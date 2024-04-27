

const MyListTable = ({item}) => {

    const {name, _id, country, location, description, cost, season, time, visitorPerYear, userName, userEmail} = item;
    console.log(item);






    return (
    //    <div>
    //         <div>
    //             <table>
    //                 <thead>
    //                     <tr>
    //                         <th>Name</th>
    //                         <th>Country</th>
    //                         <th>Season</th>
    //                         <th>Visitor Per Year</th>
    //                         <th>Cost</th>
    //                         <th>update</th>
    //                         <th>delete</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody> 
                        
                        
    //                        <tr>
    //                             <td>{item.name}</td>
    //                             <td>{item.country}</td>
    //                             <td>{item.season}</td>
    //                             <td>{item.visitorPerYear}</td>
    //                             <td>{item.cost}</td>
    //                             <td>Update</td>
    //                             <td>Delete</td>
    //                         </tr>
                       
                        
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>



    <div className="p-6 px-10">
  <table className="mt-4 w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
            <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Tourist Place <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
                </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Country/ Location <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Travel time/ Season <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Visitor Per Year <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Cost Per Person <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
            </svg>
          </p>
        </th>
        <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
          <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">Actions</p>
        </th>
      </tr>
    </thead>



    <tbody>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{name}</p>
              {/* <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{country}</p> */}
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{country}</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{location}</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{time}</p>
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{season}</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{visitorPerYear}</p>
              {/* <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{visitorPerYear}</p> */}
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{cost}</p>
              {/* <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">{visitorPerYear}</p> */}
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50 space-x-8">
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-primary">Update</button>
        </td> 
        {/* <td className="p-4 border-b border-blue-gray-50">
            <button className="btn btn-secondary">Delete</button>
        </td>  */}
        </tr>
</tbody>

    </table>
    </div>




    );
};

export default MyListTable;