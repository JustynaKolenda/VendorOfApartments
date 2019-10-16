import * as React from 'react'

type IProps = {
    values?:any,
    errors?:any,
    touched?:any,
    handleChange?:any,
    handleBlur?:any,
    handleSubmit?:any,
    isSubmitting?:any,
}

const  CreateAd = (props:IProps) => {
   const { 
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-group col-6 container">
                  <div>
                      <label className="col-lg-2 offset-xs-1" >City</label>
                      <input placeholder={'add city'} type="city" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                      {errors.city && touched.city && errors.city}
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Street</label>
                      <input  placeholder={'add street'}  type="street" name="street"  value={values.street} onChange={handleChange} onBlur={handleBlur}/>
                      {errors.street && touched.street && errors.street}
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Property</label>
                      <input placeholder={'add property'}  type="property" name="property"  value={values.property} onChange={handleChange} onBlur={handleBlur} />
                      {errors.property && touched.property && errors.property}
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Apartment</label>
                      <input placeholder={'add apartment'}  type="apartment" name="apartment"  value={values.apartment}  onChange={handleChange} onBlur={handleBlur}/>
                      {errors.apartment && touched.apartment && errors.apartment}
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Price</label>
                      <input placeholder={'add price'}  type="price" name="price"  value={values.price} onChange={handleChange} onBlur={handleBlur} />
                      {errors.price && touched.price && errors.price}
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Type</label>
                      <input placeholder={'add type'}  type="type" name="type"  value={values.type} onChange={handleChange} onBlur={handleBlur}/>
                      {errors.type && touched.type && errors.type}
                    </div>
                    <div>
                      <label className="col-lg-2 offset-xs-1">Description</label>
                      <input placeholder={'add description'}  type="description" name="description" value={values.description} onChange={handleChange} onBlur={handleBlur}/>
                      {errors.description && touched.description && errors.description}
                    </div>
                    <div>
                        <button color="info" className="col-lg-2 offset-xs-1" type="submit" id={"buttonSend"} disabled={isSubmitting}>Send</button>
                    </div>
            </form>
        </div>
    )
}
          

    export default CreateAd