import React from 'react'
import "./TablePeg.css"
import EyeIcon from '@mui/icons-material/Visibility'
import { MenuItem, Select, Tooltip, Typography } from '@mui/material'
import { NavigateNext, NavigateBefore } from "@mui/icons-material"

function TablePag({ tableData, tableColumns, width }) {

    return (
        <div style={{
            width: width === undefined ? "70%" : width,
            border: "1px solid gainsboro",
            borderRadius: "5px",
            zIndex: 10
        }}>
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            {
                                tableColumns.map((col, index) => {
                                    return <td key={index}>{col.name}</td>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((row, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{row.name}</td>
                                        <td>{row.designation}</td>
                                        <td>{row.email}</td>
                                        <td>
                                            <Tooltip placement='top' title='View'>
                                                <EyeIcon
                                                    sx={{
                                                        cursor: "pointer"
                                                    }}
                                                />
                                            </Tooltip>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className='table_pagination'>
                <div className='table_pagination_sec_1'>
                    {/* Page Numbers */}
                    <div>
                        <Typography>Page No. 1 | 23</Typography>
                    </div>
                    {/* Select Rows */}
                    <Select
                        label="Rows"
                        value={10}
                        size='small'
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </div>
                <div className='table_pagination_sec_2'>
                    {/* Pre */}
                    <Tooltip placement='top' title='Previous'>
                        <div className='page_btn'>
                            <NavigateBefore fontSize='medium' />
                        </div>
                    </Tooltip>
                    {/* Next */}
                    <Tooltip placement='top' title='Next'>
                        <div className='page_btn'>
                            <NavigateNext fontSize='medium' />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default TablePag