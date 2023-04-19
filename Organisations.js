import React from 'react'
import Card from './Card'
import './index.css'


export default function   () {
  return (
    <>
       <div className='orgBack py-4'>
          <h1 className='text-center'>Organisations</h1>
          <div className='org'>
            <div id='orgs'><Card name='Robin Hood Army' image='https://upload.wikimedia.org/wikipedia/commons/f/f3/The_Logo_of_the_Robin_Hood_Army.jpg' address='https://robinhoodarmy.com/'/></div>

            <div id='orgs'><Card name='Akshay Patra' image='https://pbs.twimg.com/profile_images/1074995644383678464/aBdy_9zC_400x400.jpg' address='https://www.akshayapatra.org/donate-to-midday-meal-programme?utm_source=Search-Brand&utm_medium=MDM-2Million&utm_campaign=GDN-TAPF&utm_content=+&gad=1&gclid=CjwKCAjw__ihBhADEiwAXEazJtYIMx7XLgAoCLixm66YoxuhqkOiv7XA_hmqedRZtxSf2TIPKKbTAxoCniAQAvD_BwE'/></div>

            <div id='orgs'><Card name='No Waste Food' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyBom1wplOA9boRk9JjZxhjvXr9l3qRPpw8dxVMMd1A&usqp=CAU&ec=48600113' address='https://www.nofoodwaste.org/'/></div>

            <div id='orgs'><Card name='Uday Foundation' image='https://i0.wp.com/www.udayfoundation.org/wp-content/uploads/2020/03/JPG-File.jpg?ssl=1' address='https://www.udayfoundation.org/donatefood/'/></div>

            <div id='orgs'><Card name='Feeding India' image='https://cdn-images-1.medium.com/max/1200/1*REBDuJ5U4usD7krlVQXuiw.png' address='https://www.feedingindia.org/donate/feedingindia'/></div>

            <div id='orgs'><Card name='Food Bank' image='https://voluntarysupport.org.uk/wp-content/uploads/freshizer/45f032ee844474cc6acab7f6ba545312_i-donated-i-donated-I-donated--940-c-90.png' address='https://foodbank.sg/'/></div>
          </div>
       </div>
    </>
  )
}
