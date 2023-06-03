<template>
  <div class="container">
    <form
      class="needs-validation"
      onSubmit="MM_validateForm('2c','','R','2s','','R');return document.MM_returnValue"
      action="http://www.mapquest.com/directions/main.adp"
      method="post"
      target="_blank"
    >
      <fieldset>
        <legend>Driving Directions</legend>

        <div class="form-group">
          <label class="form-label" for="address">Address</label>
          <input
            type="text"
            class="form-control"
            aria-describedby="addressHelpBlock"
            id="address"
            placeholder="Enter your address"
            required
          />
          <small id="addressHelpBlock" class="form-text text-muted">
            For example: 123 Main St.
          </small>
        </div>

        <div class="form-group">
          <label class="form-label" for="city">City</label>
          <input
            type="text"
            class="form-control"
            id="city"
            placeholder="Enter your city"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label" for="state">State</label>
          <input
            type="text"
            class="form-control"
            id="state"
            placeholder="Enter your state"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label" for="zipcode">Zipcode</label>
          <input
            type="text"
            class="form-control"
            id="zipcode"
            placeholder="Enter your zip code"
            required
          />
        </div>

        <div class="row">
          <input
            type="hidden"
            value="2607 Lumpkin Road"
            name="church-address"
          />
          <input type="hidden" value="Augusta" name="church-city" />
          <input type="hidden" value="GA" name="church-state" />
          <input type="hidden" value="30906" name="church-zipcode" />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "getting-directions",
};
</script>

<style scoped></style>
