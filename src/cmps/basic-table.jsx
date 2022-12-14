import EnhancedTable from "./dash-table-lib";
import { Loader } from '../cmps/loader'
import { useEffect } from "react";
import { updateOrder } from "../store/order.action"
import { SelectStatus } from "./select-status";


export const BasicTable = ({ orders }) => {

    useEffect(() => {
        updateOrder()
      }, [orders])

  
    function converOrderToRow(order) {
        return { id: order._id, status: <SelectStatus order={order} />,guests: +order.guests.adults + order.guests.children, buyer: order.buyer.fullname, startDate: order.startDate, endDate: order.endDate, placeName: order.stay.name, totalPrice: '$' + order.totalPrice };
    }
    const headCells = [
        { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
        { id: 'startDate', numeric: false, disablePadding: false, label: 'Check-in' },
        { id: 'endDate', numeric: false, disablePadding: false, label: 'Check-out' },
        { id: 'guests', numeric: false, disablePadding: false, label: 'Guests' },
        { id: 'buyer', numeric: false, disablePadding: false, label: 'Purchased by' , },
        { id: 'placeName', numeric: false, disablePadding: false, label: 'Stay Name' },
        { id: 'totalPrice', numeric: true, disablePadding: true, label: 'Orders Revenue' },
    ]

    if (!orders) return <Loader />
    const rows = orders.map(order => converOrderToRow(order))

    return (
        <EnhancedTable rows={rows} headCells={headCells}  />
    )

}





















