const ProductForm = ({ handleSubmit, ...props }) => {
  return (
    <div className="container_productForm">
      <h1>CREATE NEW PRODUCT</h1>
      <div className="productForm">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={props.name}
              placeholder="Name..."
              onChange={props.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              value={props.description}
              onChange={props.handleChange}
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

name
description
categories
available
img
price
