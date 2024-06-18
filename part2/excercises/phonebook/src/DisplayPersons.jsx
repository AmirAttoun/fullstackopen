import Names from './Names';
import TelephoneNumbers from './TelephoneNumbers';

//DisplayPersons.jsx
const DisplayPersons = ({ peopleToShow }) => {
    return (
      <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Names peopleToShow={peopleToShow} />
                </td>  
                <td>
                  <TelephoneNumbers peopleToShow={peopleToShow} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
  };

  export default DisplayPersons;