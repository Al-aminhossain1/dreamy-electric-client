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
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">

                <div class="modal-box">
                    <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-accent text-center font-bold text-2xl">{tool}</h3>
                    <p class="py-4">Are You sure want to delete {tool}</p>
                    <p class="py-4">order Id: {_id}</p>
                    <div class="modal-action">
                        <label onClick={deleteOrder} for="delete-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;