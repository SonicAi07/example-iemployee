import { Card, Typography, Box } from '@mui/material';
import React from 'react'
import './App.css';
import MyImage from './my-image.jpg'
import HomeIcon from '@mui/icons-material/Home'
import BookIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/AccountCircle'
import ClientIcon from '@mui/icons-material/ContactMail'
import TablePagination from './Components/Table/TablePag'
import Filters from './Components/Filters/Filters'

function App() {

  return (
    <div style={{
      height: "100vh",
      width: "100%",
      overflow: "hidden",
    }}>
      {/* Header */}
      <Card
        variant='outlined'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-between',
          padding: "10px 20%",
        }}>
        <Typography
          component={'h5'}
          variant='h4'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >iEmployee</Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "25%",
            justifyContent: "space-between"
          }}
        >
          <Typography>Welcome, <Typography component={'b'} variant='b'>Md Ilyas</Typography></Typography>
          <Box component={'img'} src={MyImage} alt="myImage" sx={{ width: "50px", borderRadius: "100%" }} />
        </div>
      </Card>
      {/* main_screen */}
      <div className='main_screen'>
        {/* Nav */}
        <div className='navbar'>
          <div className='nav_item_container'>
            <div className='navbar_item'>
              <HomeIcon fontSize='small' />
              <br />
              <Typography>Home</Typography>
            </div>
            <div className='navbar_item'>
              <BookIcon fontSize='small' />
              <br />
              <Typography>Reports</Typography>
            </div>
            <div className='navbar_item'>
              <UserIcon fontSize='small' />
              <br />
              <Typography>Users</Typography>
            </div>
            <div className='navbar_item'>
              <ClientIcon fontSize='small' />
              <br />
              <Typography>Clients</Typography>
            </div>
          </div>
          <div className='navbar_about'>
            <div className='navbar_image_container'>
              <img
                src={"https://www.genzeon.com/wp-content/uploads/2021/05/dna-round-icon.png"}
                alt="Logo"
              />
            </div>
            <div className='navbar_details_container'>
              <Typography>About Us</Typography>
              <a href='https://www.genzeon.com/' target={'blank'}>
                <img
                  src={"https://www.genzeon.com/wp-content/uploads/2022/03/genzeon-logo-notag-2022.png"}
                  alt='genzeon-logo'
                />
              </a>
            </div>
          </div>
        </div>
        {/* main */}
        <div className='main'>
          <div
            className='title_bar'
          >
            <Typography
              component={'h4'}
              variant='h4'
            >Employees</Typography>
          </div>
          <div className='main_items'>
            {/* Table */}
            <TablePagination
              tableData={Data}
              tableColumns={Columns}
            />
            {/* Filter */}
            <Filters />
          </div>
        </div>
      </div>

      <div className='globe_image'>
        <img
          src={"https://www.genzeon.com/wp-content/uploads/2021/06/globe-img1.png"}
          alt="Globe"
        />
      </div>
    </div>
  );
}

export default App;
// 1273ba


const Columns = [
  {
    id: 1,
    name: "Name",
  },
  {
    id: 2,
    name: "Designation"
  },
  {
    id: 3,
    name: "Email Address"
  },
  {
    id: 4,
    name: "Options"
  }
]

const Data = [
  {
    id: 1,
    name: "Md Ilyas Hussain",
    designation: "Trainee",
    email: "ilyas.taj@genzeon.com"
  },
  {
    id: 2,
    name: "Bhanu Prakash",
    designation: "Trainee",
    email: "bhanuprakash.minellareddy@genzeon.com",
  },
  {
    id: 3,
    name: "Sowmya Eppalpalli",
    designation: "Trainee",
    email: "sowmya.eppalpalli@genzeon.com",
  },
  {
    id: 4,
    name: "Sunitha Ramayanam",
    designation: "Trainee",
    email: "sunitha.ramayanam@genzeon.com",
  },
  {
    id: 5,
    name: "Mehuel Malde",
    designation: "Technical Lead",
    email: "mehul.malde@genzeon.com",
  },
  {
    id: 6,
    name: "Rajesh Pandian",
    designation: "Senior Manager",
    email: "rajesh.pandian@genzeon.com",
  },
  {
    id: 7,
    name: "Rithesh Pabbathi",
    designation: "Scrum Master",
    email: "rithesh.pabbathi@genzeon.com",
  },
  {
    id: 8,
    name: "Rupesh Pandey",
    designation: "Automation Specialist",
    email: "rupesh.pandey@genzeon.com",
  },
]