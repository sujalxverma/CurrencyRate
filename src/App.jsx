

// I am not able to sove the functionality of the first dropdwown because when i select any value the api calls again and the list changes fully, due to which the selected value changes as well and that is why i am using common list for both dropdown due to which starting value is same for both. 


import { useState, useRef} from 'react'

import useCurrencyData from './hooks/CurrencyInfo'

function App() {
  let id1 = useRef(null)
  let ids = useRef(null)
  let [amount, setamount] = useState(0)
  let [finalamount, setfinalamount] = useState(0)

  let [from, setfrom] = useState("INR")
  let [to, setto] = useState("INR")

  let [ch, setch] = useState("")
  let [search, setsearch] = useState("INR")

  let datalist1 = useCurrencyData(from)
  let datalist2 = useCurrencyData(to)
  // console.log(datalist)
  // const countryList1 = Object.keys(datalist1)
  const countryList2 = Object.keys(datalist2)
  // console.log(datalist1[to])

  function change() {
    setfinalamount(Number(amount) * Number(datalist1[search]))
    // console.log(Number(amount) * Number(datalist1[search]))
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center flex-col items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >



        <div className="from">

          <div className="labels">
            <label htmlFor="" >From</label>

            <select onChange={(e) => {

              setfrom(e.target.value)






            }} >

              {countryList2.map((curelem) => (
                <option value={curelem}>{curelem}</option>
              ))}

            </select>
          </div>

          <div className="value-box">
            <input placeholder={amount} ref={id1} onChange={(e) => {

              setamount(e.target.value)

            }}
              className='inputs' type="number" />
          </div>

        </div>



        <button onClick={(e) => {
          change()
          ids.current.value = finalamount



        }} className='btn'>Convert</button>



        <div className="to">
          <div className="labels">
            <label htmlFor="" >To</label>
            <select onChange={(e) => {

              // setto(e.target.value)
              setsearch(e.target.value)


            }}    >
              {countryList2.map((curelem) => (
                <option value={curelem}>{curelem}</option>
              ))}
            </select>
          </div>
          <div className="value-box">
            <input placeholder={finalamount} ref={ids} value={finalamount} readOnly className='inputs' type="number" />
          </div>
        </div>



      </div>
    </>
  )
}

export default App
