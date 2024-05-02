import PropTypes from "prop-types";
function UserInfo(props){
    const {data} = props
    return(

        <div className="d-flex align-items-center mx-auto" style={{ minHeight: '50vh', width:"1200px" }}>
            <table className="table table-striped table-bordered ">
                <thead>
                <tr>
                    <th scope="col">number</th>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">phone</th>
                    <th scope="col">address</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row,index) => (
                    <tr key={row.id}>
                        <td>{index+1}</td>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.phone_number}</td>
                        <td>{row.address}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
UserInfo.propTypes = {
data: PropTypes.array.isRequired
}
export default UserInfo