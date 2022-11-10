import React from "react";

const CreateEntry = () => (
  <div>
    <h1 className="title is-1">Create Food Entry</h1>
    <form>
      <label>
        Food Name:
        <input type="text" name="Food Name" />
      </label>
      <label>
        Allergens:
        <input type="text" name="Allergens" />
      </label>
      <label>
        Number of Servings/Packages:
        <input type="text" name="Size" />
      </label>
      <label>
        Loacaion:
        <input type="text" name="Location" />
      </label>
      <label>
        Dropoff Time:
        <input type="time" name="Dropoff" />
      </label>
      <label>
        Picture:
        <input type="file" name="picture" />
      </label>
      <label>
        Image Description:
        <input type="text" name="Description" />
      </label>
      <input type="submit" value="Submit" />
    </form>

  </div>
);

export default CreateEntry;