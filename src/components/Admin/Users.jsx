import React from "react";
import me from '../../reqFiles/me.jpeg'

const Users = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
             </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#7q7h7qfddv</td>
                <td>Ket</td>
                <td>
                    <img src={me} alt="User" />
                </td>
                <td>"Admin"</td>
                <td>{"07-09-2022" }</td>
   
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default Users;
