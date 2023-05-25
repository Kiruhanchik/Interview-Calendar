import { useEffect, useState } from 'react';
import styled from 'styled-components';

alert('Hi! This is my interview task. You can write plans for your week!')

const App1 = styled.div`
    display: flex;
    justify-content: center;
    background-size: auto;
    background-repeat: no-repeat;
    background-image: url('https://phonoteka.org/uploads/posts/2021-04/1618576143_3-phonoteka_org-p-fon-nebo-s-oblakami-dlya-fotoshopa-3.jpg');
  `

  const Calendar = styled.div`
    border: 2px solid black;
    width: 740px;
    height: auto;
    background-color: white;
    margin-top: 2%;
    @media (max-width: 740px) { 
      width: 450px;
    }
    @media (max-width: 500px) { 
      width: 300px;
    }
  `

  const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: auto;
    margin-top: 5%;
    background-color: white;
    h1 {
      font-size: 170%;
      margin-left: 5%;
    }
    button {
      color: red;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: 0.3s;
      margin-right: 5%;
      line-height: 0.1px;
      :hover {
        color: blue;
      };
      p {
        font-size: 320%;
      }
    }
    @media (max-width: 740px) { 
      h1 {
        font-size: 120%;
      }
    }
  `

  const YourDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(229, 229, 229);
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  `
  const Day = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    button :hover {
      color: blue;
    }
    p {
      font-weight: 500;
    };
    & p:first-child {
      margin-left: 16.5%;
    };
    & p:last-child {
      margin-right: 16.5%;
    }
    @media (max-width: 740px) { 
      p {
        font-size: 80%;
      };
    }
  `
  const Week = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & button:first-child {
      margin-left: 5%;
    }
    & button:last-child {
      margin-right: 5%;
    }
    button {
                font-size: 200%;
                color: red;
                border: none;
                background-color: transparent;
                cursor: pointer;
                transition: 0.3s;
                :hover {
                  color: blue;
                } 
    }
    p {
      font-weight: 500;
      padding: 1.5%;
      color: #000000;
      border-radius: 20px;
      :first-child {
        margin-left: 10%;
      };
      :last-child {
        margin-right: 10%;
      }
    };
    @media (max-width: 740px) { 
      p {
        font-size: 90%;
      };
    }
  `
  const Month = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            & button:first-child {
                margin-left: 5%;
            }
            & button:last-child {
                margin-right: 5%;
            }
            p {
                font-size: 130%;
                font-weight: 500;
            }
            button {
                font-size: 200%;
                color: red;
                border: none;
                background-color: transparent;
                cursor: pointer;
                transition: 0.3s;
                :hover {
                  color: blue;
                } 
            }
            @media (max-width: 740px) { 
              p {
                font-size: 100%;
              };
            }
  `
  const Main = styled.div`
        height: 390px;
        overflow-y: auto;
        overflow-x: hidden;
        margin-left: 2%;
        display: flex;
        flex-direction: row;
        ::-webkit-scrollbar {
          background-color: rgb(253, 197, 197);
          width: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: rgb(250, 112, 112);
          border-radius: 20px;
        }
        @media (max-width: 740px) { 
          ::-webkit-scrollbar {
            background-color: rgb(253, 197, 197);
            width: 7px;
          }
        }
  `
  const Hours = styled.div`
            p {
                margin-top: 83%;
                border-bottom: 1.5px solid rgb(247, 46, 46);
                color: rgb(247, 46, 46);
            }
            @media (max-width: 740px) { 
              p {
                font-size: 90%;
              }
            }
  `
  const DaysTable = styled.div`
            margin-left: 2%;
            table {
                border-collapse: collapse;
            }
            td {
                width: 85px;
                border: 2px solid rgb(169, 169, 169);
                height: 50px;
                font-size: 70%;
                transition: 0.3s;
            }
            td:hover {
              background-color: #cceeff;
            }
            & tr:first-child {
                td {
                    border-top: none;
                }
            }
            .last {
                td {
                    border-bottom: none;
                }
            }
            tr {
                :first-child {
                    border-left: none;
                }
                :last-child {
                    border-right: none;
                }
            }
            @media (max-width: 740px) { 
              td {
                
                height: 44px;
              }
            }
  `
  const Footer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(229, 229, 229);
        height: 80px;
        border-top: 2px solid black;
        & button:first-child {
            margin-left: 5%;
            color: red;
            border: none;
            background-color: transparent;
            cursor: pointer;
            transition: 0.3s;
            font-size: 150%;
            :hover {
              color: blue;
            }
        };
        & button:last-child {
            margin-right: 5%;
            color: red;
            border: none;
            background-color: transparent;
            cursor: pointer;
            transition: 0.3s;
            font-size: 150%;
            :hover {
              color: blue;
            }
        }
        @media (max-width: 740px) { 
          & button:first-child {
            margin-left: 5%;
            color: red;
            border: none;
            background-color: transparent;
            cursor: pointer;
            transition: 0.3s;
            font-size: 110%;
            :hover {
              color: blue;
            }
          };
          & button:last-child {
              margin-right: 5%;
              color: red;
              border: none;
              background-color: transparent;
              cursor: pointer;
              transition: 0.3s;
              font-size: 110%;
              :hover {
                color: blue;
              }
          }
        }
  `

function App() {

  /** Hi! This is my callendar. You can create ivent to your day **/

  const buttonDelete = () => {
    if (view == true) {
      return (
        <>
          <b>Delete🗑️</b>
        </>
      )
    }
  }

  const week = () => {

    let time = new Date().getDay();
    let mon, tus, wed, thurs, fri, sat, sun;
    let now = new Date();
    let lastDayDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    if (time == 1) {
      mon = new Date().getDate();
      tus = new Date().getDate() + 1;
      wed = new Date().getDate() + 2;
      thurs = new Date().getDate() + 3;
      fri = new Date().getDate() + 4;
      sat = new Date().getDate() + 5;
      sun = new Date().getDate() + 6;

      if (mon == lastDayDate) {
        tus = 1;
        wed = 2;
        thurs = 3;
        fri = 4;
        sat = 5;
        sun = 6;
      }

      return (
        <>
          <p style={{backgroundColor:  'red', color: 'white'}}>{mon}</p>
          <p>{tus}</p>
          <p>{wed}</p>
          <p>{thurs}</p>
          <p>{fri}</p>
          <p>{sat}</p>
          <p>{sun}</p>
        </>
      )
    };

    if (time == 2) {
      mon = new Date().getDate() - 1;
      tus = new Date().getDate();
      wed = new Date().getDate() + 1;
      thurs = new Date().getDate() + 2;
      fri = new Date().getDate() + 3;
      sat = new Date().getDate() + 4;
      sun = new Date().getDate() + 5;

      if (tus == lastDayDate) {
        mon = lastDayDate - 1;
        wed = 1;
        thurs = 2;
        fri = 3;
        sat = 4;
        sun = 5;
      }

      return (
        <>
          <p>{mon}</p>
          <p style={{backgroundColor:  'red', color: 'white'}}>{tus}</p>
          <p>{wed}</p>
          <p>{thurs}</p>
          <p>{fri}</p>
          <p>{sat}</p>
          <p>{sun}</p>
        </>
      )
    };
    if (time == 3) {
      mon = new Date().getDate() - 2;
      tus = new Date().getDate() - 1;
      wed = new Date().getDate();
      thurs = new Date().getDate() + 1;
      fri = new Date().getDate() + 2;
      sat = new Date().getDate() + 3;
      sun = new Date().getDate() + 4;

      if (wed == lastDayDate) {
        mon = lastDayDate - 2;
        tus = lastDayDate - 1;
        thurs = 1;
        fri = 2;
        sat = 3;
        sun = 4;
      }

      return (
        <>
          <p>{mon}</p>
          <p>{tus}</p>
          <p style={{backgroundColor:  'red', color: 'white'}}>{wed}</p>
          <p>{thurs}</p>
          <p>{fri}</p>
          <p>{sat}</p>
          <p>{sun}</p>
        </>
      )
    };
    if (time == 4) {
      mon = new Date().getDate() - 3;
      tus = new Date().getDate() - 2;
      wed = new Date().getDate() - 1;
      thurs = new Date().getDate();
      fri = new Date().getDate() + 1;
      sat = new Date().getDate() + 2;
      sun = new Date().getDate() + 3;

      if (thurs == lastDayDate) {
        mon = lastDayDate - 3;
        tus = lastDayDate - 2;
        wed = lastDayDate - 1;
        fri = 1;
        sat = 2;
        sun = 3;
      }

      return (
        <>
          <p>{mon}</p>
          <p>{tus}</p>
          <p>{wed}</p>
          <p style={{backgroundColor:  'red', color: 'white'}}>{thurs}</p>
          <p>{fri}</p>
          <p>{sat}</p>
          <p>{sun}</p>
        </>
      )
    };
    if (time == 5) {
      mon = new Date().getDate() - 4;
      tus = new Date().getDate() - 3;
      wed = new Date().getDate() - 2;
      thurs = new Date().getDate() - 1;
      fri = new Date().getDate();
      sat = new Date().getDate() + 1;
      sun = new Date().getDate() + 2;

      if (fri == lastDayDate) {
        mon = lastDayDate - 4;
        tus = lastDayDate - 3;
        wed = lastDayDate - 2;
        thurs = lastDayDate - 1;
        sat = 1;
        sun = 2;
      }

      return (
        <>
          <p>{mon}</p>
          <p>{tus}</p>
          <p>{wed}</p>
          <p>{thurs}</p>
          <p style={{backgroundColor:  'red', color: 'white'}}>{fri}</p>
          <p>{sat}</p>
          <p>{sun}</p>
        </>
      )
    };
    if (time == 6) {
      mon = new Date().getDate() - 5;
      tus = new Date().getDate() - 4;
      wed = new Date().getDate() - 3;
      thurs = new Date().getDate() - 2;
      fri = new Date().getDate() - 1;
      sat = new Date().getDate();
      sun = new Date().getDate() + 1;

      if (sat == lastDayDate) {
        mon = lastDayDate - 5;
        tus = lastDayDate - 4;
        wed = lastDayDate - 3;
        thurs = lastDayDate - 2;
        fri = lastDayDate - 1;
        sun = 1;
      }
      
      return (
        <>
          <p>{mon}</p>
          <p>{tus}</p>
          <p>{wed}</p>
          <p>{thurs}</p>
          <p>{fri}</p>
          <p style={{backgroundColor:  'red', color: 'white'}}>{sat}</p>
          <p>{sun}</p>
        </>
      )
    };
    if (time == 7) {
      mon = new Date().getDate() - 6;
      tus = new Date().getDate() - 5;
      wed = new Date().getDate() - 4;
      thurs = new Date().getDate() - 3;
      fri = new Date().getDate() - 2;
      sat = new Date().getDate() - 1;
      sun = new Date().getDate();

      if (sun == lastDayDate) {
        mon = lastDayDate - 6;
        tus = lastDayDate - 5;
        wed = lastDayDate - 4;
        thurs = lastDayDate - 3;
        fri = lastDayDate - 2;
        sat = lastDayDate - 1;
      }
      
      return (
        <>
          <p>{mon}</p>
          <p>{tus}</p>
          <p>{wed}</p>
          <p>{thurs}</p>
          <p>{fri}</p>
          <p>{sat}</p>
          <p style={{backgroundColor:  'red', color: 'white'}}>{sun}</p>
        </>
      )
    };
  }

  const [view, setView] = useState(false);
  const [time, setTime] = useState(new Date());
  const [daySelected, setDaySelected] = useState(false);
  const [currentDay, setCurrentDay] = useState(-1);

  const backPicture = () => {
    let now = new Date();
    if (now.getHours() > 18 || now.getHours() < 6) {
      return 'https://phonoteka.org/uploads/posts/2021-05/1622376300_12-phonoteka_org-p-zvezdnoe-nebo-piksel-art-krasivo-14.png';
    } else return 'https://phonoteka.org/uploads/posts/2021-04/1618576143_3-phonoteka_org-p-fon-nebo-s-oblakami-dlya-fotoshopa-3.jpg';
  }

  const selectDay = (n) => {
    if (document.getElementsByTagName('td')[n].innerHTML == '') {
      setView(false);
    } else {
      setView(true);
    }
    if (daySelected == false) {
      console.log('day selected');
      document.getElementsByTagName('td')[n].style.backgroundColor = '#cceeff';
      setDaySelected(true); 
      setCurrentDay(n);
    } else {
      console.log('day reset');
      document.getElementsByTagName('td')[n].style.backgroundColor = 'white';
      setDaySelected(false); 
    }
  }

  let Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const RemoveMonthCount = () => {
      setTime(new Date(time.setMonth(time.getMonth() - 1)));
      console.log(time);
  }

  const AddMonthCount = () => {
      setTime(new Date(time.setMonth(time.getMonth() + 1)));
      console.log(time);
  }

  return (
    <App1 style={{backgroundImage: `url(${backPicture()})`}}>
      <Calendar>
        <Header>
          <h1>Interview Calendar</h1>
          <button onClick={() => {
            if (daySelected == false) {
              alert('Please, select time of your plan');
            } else {
              setView(true);
              let plan = prompt('Write your plan', '');
              document.getElementsByTagName('td')[currentDay].innerHTML = plan;
              document.getElementsByTagName('td')[currentDay].style.backgroundColor = '#cceeff';
            }
          }}><p>+</p></button>
        </Header>
        <YourDate>
          <Day>
            <p>Mon</p>
            <p>Tus</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </Day>
          <Week>
            <button><b>&#8249;</b></button>
            {week()}
            <button><b>&#8250;</b></button>
          </Week>
          <Month>
            <button onClick={() => RemoveMonthCount()}><b>&#8249;</b></button>
            <p>{Months[time.getMonth()]} {time.getFullYear()}</p>
            <button onClick={() => AddMonthCount()}><b>&#8250;</b></button>
          </Month>
        </YourDate>
        <Main>
          <Hours>
            <p>00:00</p>
            <p>01:00</p>
            <p>02:00</p>
            <p>03:00</p>
            <p>04:00</p>
            <p>05:00</p>
            <p>06:00</p>
            <p>07:00</p>
            <p>08:00</p>
            <p>09:00</p>
            <p>10:00</p>
            <p>11:00</p>
            <p>12:00</p>
            <p>13:00</p>
            <p>14:00</p>
            <p>15:00</p>
            <p>16:00</p>
            <p>17:00</p>
            <p>18:00</p>
            <p>19:00</p>
            <p>20:00</p>
            <p>21:00</p>
            <p>22:00</p>
            <p>23:00</p>
          </Hours>
          <DaysTable>
            <table>
              <tbody>
                <tr>
                  <td onClick={() => selectDay(0)}></td>
                  <td onClick={() => selectDay(1)}></td>
                  <td onClick={() => selectDay(2)}></td>
                  <td onClick={() => selectDay(3)}></td>
                  <td onClick={() => selectDay(4)}></td>
                  <td onClick={() => selectDay(5)}></td>
                  <td onClick={() => selectDay(6)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(7)}></td>
                  <td onClick={() => selectDay(8)}></td>
                  <td onClick={() => selectDay(9)}></td>
                  <td onClick={() => selectDay(10)}></td>
                  <td onClick={() => selectDay(11)}></td>
                  <td onClick={() => selectDay(12)}></td>
                  <td onClick={() => selectDay(13)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(14)}></td>
                  <td onClick={() => selectDay(15)}></td>
                  <td onClick={() => selectDay(16)}></td>
                  <td onClick={() => selectDay(17)}></td>
                  <td onClick={() => selectDay(18)}></td>
                  <td onClick={() => selectDay(19)}></td>
                  <td onClick={() => selectDay(20)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(21)}></td>
                  <td onClick={() => selectDay(22)}></td>
                  <td onClick={() => selectDay(23)}></td>
                  <td onClick={() => selectDay(24)}></td>
                  <td onClick={() => selectDay(25)}></td>
                  <td onClick={() => selectDay(26)}></td>
                  <td onClick={() => selectDay(27)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(28)}></td>
                  <td onClick={() => selectDay(29)}></td>
                  <td onClick={() => selectDay(30)}></td>
                  <td onClick={() => selectDay(31)}></td>
                  <td onClick={() => selectDay(32)}></td>
                  <td onClick={() => selectDay(33)}></td>
                  <td onClick={() => selectDay(34)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(35)}></td>
                  <td onClick={() => selectDay(36)}></td>
                  <td onClick={() => selectDay(37)}></td>
                  <td onClick={() => selectDay(38)}></td>
                  <td onClick={() => selectDay(39)}></td>
                  <td onClick={() => selectDay(40)}></td>
                  <td onClick={() => selectDay(41)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(42)}></td>
                  <td onClick={() => selectDay(43)}></td>
                  <td onClick={() => selectDay(44)}></td>
                  <td onClick={() => selectDay(45)}></td>
                  <td onClick={() => selectDay(46)}></td>
                  <td onClick={() => selectDay(47)}></td>
                  <td onClick={() => selectDay(48)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(49)}></td>
                  <td onClick={() => selectDay(50)}></td>
                  <td onClick={() => selectDay(51)}></td>
                  <td onClick={() => selectDay(52)}></td>
                  <td onClick={() => selectDay(53)}></td>
                  <td onClick={() => selectDay(54)}></td>
                  <td onClick={() => selectDay(55)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(56)}></td>
                  <td onClick={() => selectDay(57)}></td>
                  <td onClick={() => selectDay(58)}></td>
                  <td onClick={() => selectDay(59)}></td>
                  <td onClick={() => selectDay(60)}></td>
                  <td onClick={() => selectDay(61)}></td>
                  <td onClick={() => selectDay(62)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(63)}></td>
                  <td onClick={() => selectDay(64)}></td>
                  <td onClick={() => selectDay(65)}></td>
                  <td onClick={() => selectDay(66)}></td>
                  <td onClick={() => selectDay(67)}></td>
                  <td onClick={() => selectDay(68)}></td>
                  <td onClick={() => selectDay(69)}></td> 
                </tr>
                <tr>
                  <td onClick={() => selectDay(70)}></td>
                  <td onClick={() => selectDay(71)}></td>
                  <td onClick={() => selectDay(72)}></td>
                  <td onClick={() => selectDay(73)}></td>
                  <td onClick={() => selectDay(74)}></td>
                  <td onClick={() => selectDay(75)}></td>
                  <td onClick={() => selectDay(76)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(77)}></td>
                  <td onClick={() => selectDay(78)}></td>
                  <td onClick={() => selectDay(79)}></td>
                  <td onClick={() => selectDay(80)}></td>
                  <td onClick={() => selectDay(81)}></td>
                  <td onClick={() => selectDay(82)}></td>
                  <td onClick={() => selectDay(83)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(84)}></td>
                  <td onClick={() => selectDay(85)}></td>
                  <td onClick={() => selectDay(86)}></td>
                  <td onClick={() => selectDay(87)}></td>
                  <td onClick={() => selectDay(88)}></td>
                  <td onClick={() => selectDay(89)}></td>
                  <td onClick={() => selectDay(90)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(91)}></td>
                  <td onClick={() => selectDay(92)}></td>
                  <td onClick={() => selectDay(93)}></td>
                  <td onClick={() => selectDay(94)}></td>
                  <td onClick={() => selectDay(95)}></td>
                  <td onClick={() => selectDay(96)}></td>
                  <td onClick={() => selectDay(97)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(98)}></td>
                  <td onClick={() => selectDay(99)}></td>
                  <td onClick={() => selectDay(100)}></td>
                  <td onClick={() => selectDay(101)}></td>
                  <td onClick={() => selectDay(102)}></td>
                  <td onClick={() => selectDay(103)}></td>
                  <td onClick={() => selectDay(104)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(105)}></td>
                  <td onClick={() => selectDay(106)}></td>
                  <td onClick={() => selectDay(107)}></td>
                  <td onClick={() => selectDay(108)}></td>
                  <td onClick={() => selectDay(109)}></td>
                  <td onClick={() => selectDay(110)}></td>
                  <td onClick={() => selectDay(111)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(112)}></td>
                  <td onClick={() => selectDay(113)}></td>
                  <td onClick={() => selectDay(114)}></td>
                  <td onClick={() => selectDay(115)}></td>
                  <td onClick={() => selectDay(116)}></td>
                  <td onClick={() => selectDay(117)}></td>
                  <td onClick={() => selectDay(118)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(119)}></td>
                  <td onClick={() => selectDay(120)}></td>
                  <td onClick={() => selectDay(121)}></td>
                  <td onClick={() => selectDay(122)}></td>
                  <td onClick={() => selectDay(123)}></td>
                  <td onClick={() => selectDay(124)}></td>
                  <td onClick={() => selectDay(125)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(126)}></td>
                  <td onClick={() => selectDay(127)}></td>
                  <td onClick={() => selectDay(128)}></td>
                  <td onClick={() => selectDay(129)}></td>
                  <td onClick={() => selectDay(130)}></td>
                  <td onClick={() => selectDay(131)}></td>
                  <td onClick={() => selectDay(132)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(133)}></td>
                  <td onClick={() => selectDay(134)}></td>
                  <td onClick={() => selectDay(135)}></td>
                  <td onClick={() => selectDay(136)}></td>
                  <td onClick={() => selectDay(137)}></td>
                  <td onClick={() => selectDay(138)}></td>
                  <td onClick={() => selectDay(139)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(140)}></td>
                  <td onClick={() => selectDay(141)}></td>
                  <td onClick={() => selectDay(142)}></td>
                  <td onClick={() => selectDay(143)}></td>
                  <td onClick={() => selectDay(144)}></td>
                  <td onClick={() => selectDay(145)}></td>
                  <td onClick={() => selectDay(146)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(147)}></td>
                  <td onClick={() => selectDay(148)}></td>
                  <td onClick={() => selectDay(149)}></td>
                  <td onClick={() => selectDay(150)}></td>
                  <td onClick={() => selectDay(151)}></td>
                  <td onClick={() => selectDay(152)}></td>
                  <td onClick={() => selectDay(153)}></td>
                </tr>
                <tr>
                  <td onClick={() => selectDay(154)}></td>
                  <td onClick={() => selectDay(155)}></td>
                  <td onClick={() => selectDay(156)}></td>
                  <td onClick={() => selectDay(157)}></td>
                  <td onClick={() => selectDay(158)}></td>
                  <td onClick={() => selectDay(159)}></td>
                  <td onClick={() => selectDay(160)}></td>
                </tr>
                <tr className='last'>
                  <td onClick={() => selectDay(161)}></td>
                  <td onClick={() => selectDay(162)}></td>
                  <td onClick={() => selectDay(163)}></td>
                  <td onClick={() => selectDay(164)}></td>
                  <td onClick={() => selectDay(165)}></td>
                  <td onClick={() => selectDay(166)}></td>
                  <td onClick={() => selectDay(167)}></td>
                </tr>
              </tbody>
            </table>
          </DaysTable>
        </Main>
        <Footer>
          <button onClick={() => {
          }}><b>Today✅</b></button>
          <button onClick={() => {
            console.log('plan deleted');
            document.getElementsByTagName('td')[currentDay].innerHTML = '';
            document.getElementsByTagName('td')[currentDay].style.backgroundColor = 'white';
            setView(false);
          }}>{buttonDelete(view)}</button>
        </Footer>
      </Calendar>
    </App1>
  );
}

export default App;
