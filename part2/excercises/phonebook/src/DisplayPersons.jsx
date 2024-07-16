/* eslint-disable react/prop-types */
import Names from './Names';
import TelephoneNumbers from './TelephoneNumbers';

//DisplayPersons.jsx
const DisplayPersons = ({peopleToShow, deletePerson}) => {
    return (
      <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Names peopleToShow={peopleToShow} />
                </td>  
                <td>
                  <TelephoneNumbers peopleToShow={peopleToShow} deletePerson={() => deletePerson()}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  };

  export default DisplayPersons;