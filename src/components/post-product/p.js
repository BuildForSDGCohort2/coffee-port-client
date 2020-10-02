return (
    <Grid container direction='column'  alignItems="center" justify="center">
    <div className={classes.root}>
      <Grid container direction='column'  alignItems="center" justify="center">
        <Grid item><Typography variant='h4' color='primary'>Post Product</Typography></Grid>
        
        <form onSubmit={handleSubmit}>
          <Grid container>
          <Grid className = {classes.eachCombo} item xs={5}>
            <CustomComboBox

              value={productName}
              onChange={(event, newValue) => {
                setSelectedProperties({
                  ...selectedProperties,
                  productName: newValue,
                });
                //  newValue===null?filtersVar({uniqueAttributes:emptyAttributes(filtersVar().uniqueAttributes),type:newValue}):
                //  filtersVar({...filtersVar(), type:newValue})
              }}
              id="productName"
              options={TYPE}
              getOptionLabel={(option) => option}
              label="Product Name"
            />
          </Grid>
          <Grid className={classes.eachInput} item xs={5}>
            <CustomInputField 
            normalMargin={true}
            style={{ width: 200 }} size='small' variant="filled" type='number' value={productQuantity} label="Quantity" name="productQuantity" 
            onChange={handleChange}
            
            />
          </Grid>
          <Grid className={classes.eachInput} item xs={5}>
            <CustomInputField 
            normalMargin={true}
            style={{ width: 200 }}
             size='small'
            variant="filled"
              label="Measurment Unit"
              name="productMeasurementUnit"
              type='text'
              value={productMeasurementUnit}
              onChange={handleChange}
          

            />
          </Grid>
          <Grid className={classes.eachInput} item xs={5}>
            <CustomInputField normalMargin={true} style={{ width: 200 }} size='small'
             variant="filled" label={`Price in USD per ${productMeasurementUnit}`} type='number' value={productPrice} name="productPrice"
                          onChange={handleChange}
            
            
            />
          </Grid>

          {productName
            ? COMBOBOX_DATA[productName].map(
                ({
                  id,
                  handleFilterChange,
                  attributeName,
                  ...allProps
                }) => (
                  <Grid key={id} className = {classes.eachCombo} item xs={5}>
                    <CustomComboBox
                      value={
                        attributeName === 'geographicalDesignation' &&
                        productName === 'Coffee'
                          ? uniqueAttributes[attributeName]
                              .specificOrigin
                          : uniqueAttributes[attributeName]
                      }
                      onChange={(e, newValue) => {
                        handlePostChange(e, newValue, attributeName);
                      }}
                      {...allProps}
                    />
                  </Grid>
                ),
              )
            : null}
          {/* <Grid item xs={12}>
            <CustomInputField
              label="additionalDescription"
              value={additionalDescription}
              rows={4}
              multiline
              variant="filled"
              name="Additional Description"
              onChange= {handleChange}
            />
          </Grid> */}
          <Grid className={classes.button}  item xs={12}>
            <CustomButton style={{ color: '#121037'}} color="secondary" variant="contained" color="secondary" type="submit">Post Product</CustomButton></Grid>
          
          </Grid>
        </form>
      </Grid>
    </div>
    </Grid>
  );