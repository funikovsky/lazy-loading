

import { FC, useMemo, useState } from 'react';
import './App.css';



interface IUser {

  address: IAddress,
  id: number,
  name: string,
  username: string,
  email: string

}

interface IAddress {
  city: string,
  geo: IGeo,
  street: string,
  suite: string,
  zipcode: string,
  


}

interface IGeo {
  lat: string,
  lng: string
}


const App: FC = () => {

  const [user, setUser] = useState<IUser>(Object)

  const request = useMemo(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()

    console.log(data)

    const { address: {city, geo: {lat, lng}, street, suite, zipcode}, id, name, username, email } = data;

    const userData: IUser = {


      address: {

        city,
        geo: {
          lat,
          lng
        },
        street,
        suite,
        zipcode,
        

      },
      id,
      name,
      username,
      email,
    }

    setUser(prev => userData)


  }, [])


  return (
    <div className="App"> Пользователь N-{user.id}:

      <p>ИМЯ -- {user.name},  </p>
      <p>НИК --- {user.username},</p>
      <p>E-Mail: {user.email}</p>
      <p>Адрес: {user.address.city}</p>




    </div>
  );
}

export default App;
