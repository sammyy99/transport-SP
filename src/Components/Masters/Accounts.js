import React from "react";

const Accounts = () => {
  return (
    <div className=" h-screen col-start-2 col-end-12">
      <div className="pt-24 flex w-full justify-center text-2xl">
        Account Details
      </div>


      <div>
        <div className="div1 flex space-x-8 mt-12">
          <div>
            <label>A/C Type : </label>
            <select>
              <option>Transport</option>
              <option>Publisher</option>
            </select>
          </div>


          <div>
            <label>Station : </label>
            <select>
              <option>Meerut</option>
              <option>Agra</option>
            </select>
          </div>

          <div>
            <label>State : </label>
            <select>
              <option>UttarPradesh</option>
              <option>Punjab</option>
            </select>
          </div>

          <div>
            <label>Location</label>
            <input type="text" placeholder="Location"></input>
          </div>
        </div>
      </div>


      <div className="mt-10 ">
        <div className="mb-1">
          <label>A/C Name : </label>
          <input type="text" placeholder=""></input>
        </div>

        <div className="mb-1">
          <label>Mailing Name : </label>
          <input type="text" placeholder=""></input>
        </div>

        <div className="mb-1">
          <label>Address : </label>
          <textarea rows="2"></textarea>
        </div>

        <div>
          <label>GSTIN : </label>
          <input type="text" placeholder=""></input>
        </div>
      </div>


      <div className="mt-10">
        <div className="flex space-x-10">
          <div>
            <label>B/H/I/C : </label>
            <select>
              <option>B</option>
              <option>H</option>
              <option>I</option>
              <option>C</option>
            </select>
          </div>
          <div>
            <label>Web Service Status : </label>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="mt-1">
          <label>Date from : </label>
          <input type="date"></input>
        </div>
        <div className="flex space-x-8 mt-1">
          <div>
            <label>Web from : </label>
            <input type="date"></input>
          </div>
          <div>
            <label>To date : </label>
            <input type="date"></input>
          </div>
        </div>
        <div className="flex space-x-8 mt-1">
          <div className="">
            <label>Licence from : </label>
            <input type="date"></input>
          </div>
          <div>
            <label>Licence to : </label>
            <input type="date"></input>
          </div>
        </div>
      </div>


      <div className="mt-10">
        <div className="flex space-x-12 mb-1">
          <div>
            <label>Web Backup : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>Multiuser : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>Eway Bill : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>Print Developer : </label>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="flex space-x-12 mb-1">
          <div>
            <label>Auto GR no. : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>Manual Ch no. : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>Multi Item : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>Full Truck Load : </label>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="flex space-x-12">
          <div>
            <label>From Station in Bilty : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>Eway Bill API : </label>
            <input type="checkbox"></input>
          </div>
          <div>
            <label>B/D/A : </label>
            <select>
              <option>B</option>
              <option>D</option>
              <option>A</option>
            </select>
          </div>
          <div>
            <label>B .off : </label>
            <select>
              <option>Yes</option>
              <option>No</option>
              <option>Both</option>
            </select>
          </div>
        </div>
      </div>


      <div className="mt-10">
        <div className="flex space-x-8">
          <div>
            <label>Contact Person : </label>
            <input type="text"></input>
          </div>
          <div>
            <label>Office no. : </label>
            <input type="text"></input>
          </div>
          <div>
            <label>Phone no. : </label>
            <input type="text"></input>
          </div>
        </div>

        <div className="mt-1 flex space-x-6">
           <div>
            <label>Resi. : </label>
            <input type="text"></input>
           </div>
           <div>
            <label>Fax No. : </label>
            <input type="text"></input>
           </div>
        </div>

        <div className="mt-1">
           <div>
            <label>Domain : </label>
            <input type="text"></input>
           </div>
        </div>

      </div>

    </div>
  );
};

export default Accounts;
