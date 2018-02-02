import moment from "moment";
import * as actionTypes from "./actionTypes";

const fetch_todo = dispatch => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("GET", "POST", "OPTIONS");
    fetch("http://localhost:8080/api/toDo/", {
      method: "GET",
      headers: headers
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        let temp_data = [];
        data.map((td, index) => {
          temp_data.push({
            title: td.title,
            description: td.description,
            createdon: td.createdon,
            modifiedon: td.modifiedon,
            id: td.id
          });
          return true;
        });
        console.log(temp_data);
        dispatch({ type: actionTypes.FETCH_TODO_SUCCESS, payload: temp_data });
      })
      .catch(err => {
        console.error("Error:", err);
        dispatch({ type: actionTypes.FETCH_TODO_FAILED, payload: err });
      });
  },
  update_todo = (id, title, description, createdon, dispatch) => {
    console.log(id);
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("GET", "PUT", "OPTIONS");

    let myDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    var details = {
      id: id,
      title: title,
      description: description,
      createdon: createdon,
      modifiedon: myDate
    };
    var formBody = [];

    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch(`http://localhost:8080/api/toDo/${id}?` + formBody, {
      method: "PUT",
      headers: headers
    })
      .then(res => {
        console.log("this is res", res.url);
        dispatch({ type: actionTypes.UPDATE_TODO_SUCCESS, payload: details });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: actionTypes.UPDATE_TODO_FAILED,
          payload: err
        });
      });
  },
  delete_todo = (title, taskId, dispatch) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("GET", "POST", "DELETE", "OPTIONS");

    fetch(`http://localhost:8080/api/toDo/${taskId}`, {
      method: "DELETE",
      headers: headers
    })
      .then(res => {
        console.log("this is res", res.url);
        dispatch({ type: actionTypes.DELETE_TODO_SUCCESS, payload: taskId });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: actionTypes.DELETE_TODO_FAILED, payload: err });
      });
    console.log("deleted");
  },
  addToDB = (task, desc, id, dispatch) => {
    let headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    headers.append("Accept", "application/json");
    headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headers.append("GET", "POST", "OPTIONS");

    let myDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    var details = {
      title: task,
      description: desc,
      createdon: myDate,
      modifiedon: myDate
    };
    var formBody = [];

    for (var property in details) {
      console.log(property);
      console.log(details[property]);
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);

    fetch("http://localhost:8080/api/toDo?" + formBody, {
      method: "POST",
      headers: headers
    })
      .then(res => {
        console.log("this is res", res.url);
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
        headers.append("GET", "POST", "OPTIONS");
        fetch("http://localhost:8080/api/toDo/", {
          method: "GET",
          headers: headers
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            let temp_data = [];
            data.map((td, index) => {
              temp_data.push({
                title: td.title,
                description: td.description,
                createdon: td.createdon,
                modifiedon: td.modifiedon,
                id: td.id
              });
              return true;
            });
            console.log(temp_data);
            dispatch({
              type: actionTypes.FETCH_TODO_SUCCESS,
              payload: temp_data
            });
          })
          .catch(err => {
            console.error("Error:", err);
            dispatch({
              type: actionTypes.FETCH_TODO_FAILED,
              payload: err
            });
          });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: actionTypes.ADD_TODO_FAILED, payload: err });
      });
  };

export { addToDB, fetch_todo, delete_todo, update_todo };
