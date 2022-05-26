import React from 'react';

const DeleteModal = ({ remove }) => {
    const { tool, _id } = remove;
    const deleteOrder = () => {
        fetch(`https://radiant-shelf-47828.herokuapp.com/order/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box">
                    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-accent text-center font-bold text-2xl">{tool}</h3>
                    <p className="py-4">Are You sure want to delete {tool}</p>
                    <p className="py-4">order Id: {_id}</p>
                    <div className="modal-action">
                        <label onClick={deleteOrder} htmlFor="delete-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;