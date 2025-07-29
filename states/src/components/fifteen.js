import React, { useState } from 'react'

export default function Fifteen() {
    const [stt, setstt] = useState([
        { id: '1', name: 'Gujarat' },
        { id: '2', name: 'Maharashtra' },
        { id: '3', name: 'Madhya Pradesh' },
        { id: '4', name: 'Rajasthan' },
        { id: '5', name: 'Uttar Pradesh' }
    ]);

    const [city, setcity] = useState([
        // Gujarat
        { id: '1', name: 'Ahmedabad', sid: '1' },
        { id: '2', name: 'Surat', sid: '1' },
        { id: '3', name: 'Gandhinagar', sid: '1' },
        { id: '4', name: 'Rajkot', sid: '1' },

        // Maharashtra
        { id: '5', name: 'Mumbai', sid: '2' },
        { id: '6', name: 'Pune', sid: '2' },
        { id: '7', name: 'Nashik', sid: '2' },
        { id: '8', name: 'Nagpur', sid: '2' },

        // Madhya Pradesh
        { id: '9', name: 'Bhopal', sid: '3' },
        { id: '10', name: 'Indore', sid: '3' },
        { id: '11', name: 'Jabalpur', sid: '3' },

        // Rajasthan
        { id: '12', name: 'Jaipur', sid: '4' },
        { id: '13', name: 'Udaipur', sid: '4' },
        { id: '14', name: 'Jodhpur', sid: '4' },

        // Uttar Pradesh
        { id: '15', name: 'Lucknow', sid: '5' },
        { id: '16', name: 'Varanasi', sid: '5' },
        { id: '17', name: 'Agra', sid: '5' }
    ]);

    const [newarr, setnewarr] = useState([])
    let selectcity = (e) => {
        console.log(e.target.value, [...city]);
        let temp = city.filter((item) => item.sid === e.target.value)
        setnewarr(temp)
    }
    return (
        <div>
            <h3>15. Create a dropdown menu using select and use state to show the selected value.</h3>
            <div>
                <select onChange={selectcity}>
                    <option>Select State</option>
                    {
                        stt.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
                <select>
                    {
                        newarr.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
