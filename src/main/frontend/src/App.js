// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';
// import axios from 'axios'
import User from './components/User'
import './App.css';

// const App = () => {
//   // 요청받은 정보를 담아줄 변수 선언
//   const [ testStr, setTestStr ] = useState('');

//   // 변수 초기화a
//   function callback(str) {
//     setTestStr(str);
//   }

//   // 첫 번째 렌더링을 마친 후 실행
//   useEffect(
//       () => {
//         axios.get('/api').then((res) => {
//             callback(res.data);
//         })
//       }, []
//   );

//   return (
//       <div className="App">
//           <header className="App-header">
//               {testStr}
//           </header>
//       </div>
//   );
// }

const users=[{
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '121212',
  'gender' : '남',
  'job' : 'dd'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/2',
  'name' : '홍길동',
  'birthday' : '121212',
  'gender' : '남',
  'job' : 'dd'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/3',
  'name' : '홍길동',
  'birthday' : '121212',
  'gender' : '남',
  'job' : 'dda'
}
]

class App extends Component {
  render() {
    return (
      <div>
        { // map 사용시 key 설정 필수
          users.map(u => {
            return (
              <User
                key={u.id}
                id={u.id}
                image={u.image}
                name={u.name}
                birthday={u.birthday}
                gender={u.gender}
                job={u.job}
                />
            );
          })
        }
      </div>
    );
  }
}

export default App;