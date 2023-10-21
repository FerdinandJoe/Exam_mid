let finalList = [];

      let display = (finalList) => {
        if (finalList.length === 0) {
          document.getElementById("table").innerHTML = "";
          document.getElementById("infoBox1").style.display ="block";
          document.getElementById("infoBox1").innerHTML =
            "Currently there are no records !";
        } else {
          let tableItems = "";
          finalList.forEach((listItems) => {
            tableItems += "<tr>";
            tableItems += `<td><i>${listItems.id}</i></td>`;
            tableItems += `<td class="width-52">${listItems.name}</td>`;
            tableItems += `<td><button class="btn btn-primary" onclick="editRecord('${listItems.id}' ,'${listItems.name}')">Edit <i class="fa fa-edit"></i></button>`;
            tableItems += `&nbsp;<button class="btn btn-danger" onclick="removeRecord('${listItems.id}')">Trash <i class="fa fa-trash"></i></button>`;
            tableItems += "</td>";
            tableItems += "</tr>";
            document.getElementById("infoBox1").style.display = "none";
            document.getElementById("table").innerHTML = tableItems;
          });
        }
      };

      let insertRecord1 = () => {
        let randomString = Math.random()
          .toString(36)
          .replace("0.", "RECORD-ID-" || "");
        recordTextboxValue = document.getElementById("recordName1").value;
        if (recordTextboxValue === "") {
          alert("Input cannot be empty");
          document.getElementById("recordName1").focus();
        } else {
          finalList.push({
            id: randomString,
            name: recordTextboxValue
          });
          document.getElementById("recordName1").value = "";
          display(finalList);
        }
      };

      let removeRecord1 = (recordId) => {
        if (confirm("Are you sure you want to delete this record?")) {
          finalList.forEach((listItems, index) => {
            if (listItems.id == recordId) {
              finalList.splice(index, 1);
            }
          });
        }
        display(finalList);
      };

      let editRecord1 = (recordId, recordName) => {
        document.getElementById("recordName1").value = recordName;
        document.getElementById("hiddenRecordId").value = recordId;
        document.getElementById("addNewRecord1").style.display = "none";
        document.getElementById("updateRecord1").style.display = "inline-block";
      };

      let updateList1 = () => {
        const hiddenRecordId = document.getElementById("hiddenRecordId").value,
          updateRecord = document.getElementById("recordName1").value;

        document.getElementById("recordName1").value = updateRecord;
        finalList.map((listItems, index) => {
          if (listItems.id == hiddenRecordId) {
            listItems.name = updateRecord;
          }
        });
        document.getElementById("addNewRecord1").style.display = "inline-block";
        document.getElementById("updateRecord1").style.display = "none";
        document.getElementById("recordName1").value = null;
        display(finalList);
      };

      let display2 = (finalList) => {
        if (finalList.length === 0) {
          document.getElementById("table").innerHTML = "";
          document.getElementById("infoBox2").style.display = "block";
          document.getElementById("infoBox2").innerHTML =
            "Currently there are no records !";
        } else {
          let tableItems = "";
          finalList.forEach((listItems) => {
            tableItems += "<tr>";
            tableItems += `<td><i>${listItems.id}</i></td>`;
            tableItems += `<td class="width-52">${listItems.name}</td>`;
            tableItems += `<td><button class="btn btn-primary" onclick="editRecord('${listItems.id}' ,'${listItems.name}')">Edit <i class="fa fa-edit"></i></button>`;
            tableItems += `&nbsp;<button class="btn btn-danger" onclick="removeRecord('${listItems.id}')">Trash <i class="fa fa-trash"></i></button>`;
            tableItems += "</td>";
            tableItems += "</tr>";
            document.getElementById("infoBox2").style.display = "none";
            document.getElementById("table").innerHTML = tableItems;
          });
        }
      };

      let insertRecord2 = () => {
        let randomString = Math.random()
          .toString(36)
          .replace("0.", "RECORD-ID-" || "");
        recordTextboxValue = document.getElementById("recordName2").value;
        if (recordTextboxValue === "") {
          alert("Input cannot be empty");
          document.getElementById("recordName2").focus();
        } else {
          finalList.push({
            id: randomString,
            name: recordTextboxValue
          });
          document.getElementById("recordName2").value = "";
          display(finalList);
        }
      };

      let display3 = (finalList) => {
        if (finalList.length === 0) {
          document.getElementById("table").innerHTML = "";
          document.getElementById("infoBox3").style.display = "block";
          document.getElementById("infoBox3").innerHTML =
            "Currently there are no records !";
        } else {
          let tableItems = "";
          finalList.forEach((listItems) => {
            tableItems += "<tr>";
            tableItems += `<td><i>${listItems.id}</i></td>`;
            tableItems += `<td class="width-52">${listItems.name}</td>`;
            tableItems += `<td><button class="btn btn-primary" onclick="editRecord('${listItems.id}' ,'${listItems.name}')">Edit <i class="fa fa-edit"></i></button>`;
            tableItems += `&nbsp;<button class="btn btn-danger" onclick="removeRecord('${listItems.id}')">Trash <i class="fa fa-trash"></i></button>`;
            tableItems += "</td>";
            tableItems += "</tr>";
            document.getElementById("infoBox3").style.display = "none";
            document.getElementById("table").innerHTML = tableItems;
          });
        }
      };

      let insertRecord3 = () => {
        let randomString = Math.random()
          .toString(36)
          .replace("0.", "RECORD-ID-" || "");
        recordTextboxValue = document.getElementById("recordName3").value;
        if (recordTextboxValue === "") {
          alert("Input cannot be empty");
          document.getElementById("recordName3").focus();
        } else {
          finalList.push({
            id: randomString,
            name: recordTextboxValue
          });
          document.getElementById("recordName3").value = "";
          display(finalList);
        }
      };

      let removeRecord = (recordId) => {
        if (confirm("Are you sure you want to delete this record?")) {
          finalList.forEach((listItems, index) => {
            if (listItems.id == recordId) {
              finalList.splice(index, 1);
            }
          });
        }
        display(finalList);
      };

      let editRecord = (recordId, recordName) => {
        document.getElementById("recordName").value = recordName;
        document.getElementById("hiddenRecordId").value = recordId;
        document.getElementById("addNewRecord").style.display = "none";
        document.getElementById("updateRecord").style.display = "inline-block";
      };

      let updateList = () => {
        const hiddenRecordId = document.getElementById("hiddenRecordId").value,
          updateRecord = document.getElementById("recordName").value;

        document.getElementById("recordName").value = updateRecord;
        finalList.map((listItems, index) => {
          if (listItems.id == hiddenRecordId) {
            listItems.name = updateRecord;
          }
        });
        document.getElementById("addNewRecord").style.display = "inline-block";
        document.getElementById("updateRecord").style.display = "none";
        document.getElementById("recordName").value = null;
        display(finalList);
      };