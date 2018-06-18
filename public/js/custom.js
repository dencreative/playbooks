/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

eval("\n// Referencing our table.\nvar table;\n\n$('.delete-entry').click(function (e) {\n\n  console.log('delete');\n\n  e.preventDefault();\n\n  var id = $(this).data('id');\n\n  console.log(id);\n\n  $('.delete-playbook-entry-modal').data('id', id);\n});\n\n$('.delete-playbook-entry-modal').click(function () {\n  var id = $(this).data('id');\n\n  console.log($(this).data());\n  table.row($('tr[data-id=\"' + id + '\"]')).remove().draw();\n  sendRequest('DELETE', id);\n});\n\n$('.add-playbook-entry-modal').click(function () {\n\n  // get data from modal\n\n  // send data to db\n\n  // refresh the page \n\n  var title = $('.form-group').find('input[placeholder=\"Title\"]').val();\n  var description = $('.form-group').find('input[placeholder=\"Description\"]').val();\n\n  var id = parseInt(table.row(':last').data()[0]) + 1;\n  var actions = table.row(':last').data().pop();\n\n  var regex = /(<a data-id=\")\\d*(\")/gm;\n\n  actions = actions.replace(regex, \"$1\" + id + \"$2\");\n\n  var rowNode = table.row.add([id, title, 'yeet', description, actions]).draw().node();\n\n  $(rowNode).attr('data-id', id).css('color', 'red');\n\n  console.log(rowNode);\n\n  sendRequest('POST', '', title, description);\n});\n\nvar sendRequest = function sendRequest(method) {\n  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var item = arguments[2];\n  var description = arguments[3];\n\n\n  var API = 'https://den-playbooks.app/api/';\n  var INDEX_QUERY = 'entries';\n\n  // Decide endpoint.\n  var QUERY = '';\n  switch (method) {\n    case 'GET':\n      QUERY = 'entries';break;\n    case 'POST':\n      QUERY = 'entries';break;\n    case 'PUT':\n      QUERY = 'entries/';break;\n    case 'DELETE':\n      QUERY = 'entries/';break;\n  };\n\n  var headers = {\n    'Accept': 'application/json',\n    'Content-Type': 'application/json'\n  };\n\n  // Send request.\n  fetch(API + QUERY + id, {\n    method: method,\n    headers: headers,\n    body: JSON.stringify({\n      title: item,\n      description: description\n    })\n  }).then(function (response) {\n    return console.log(response);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2N1c3RvbS5qcz82ZWY0Il0sIm5hbWVzIjpbInRhYmxlIiwiJCIsImNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiZGF0YSIsInJvdyIsInJlbW92ZSIsImRyYXciLCJzZW5kUmVxdWVzdCIsInRpdGxlIiwiZmluZCIsInZhbCIsImRlc2NyaXB0aW9uIiwicGFyc2VJbnQiLCJhY3Rpb25zIiwicG9wIiwicmVnZXgiLCJyZXBsYWNlIiwicm93Tm9kZSIsImFkZCIsIm5vZGUiLCJhdHRyIiwiY3NzIiwibWV0aG9kIiwiaXRlbSIsIkFQSSIsIklOREVYX1FVRVJZIiwiUVVFUlkiLCJoZWFkZXJzIiwiZmV0Y2giLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0EsSUFBSUEsS0FBSjs7QUFFQUMsRUFBRSxlQUFGLEVBQW1CQyxLQUFuQixDQUF5QixVQUFTQyxDQUFULEVBQVk7O0FBRW5DQyxVQUFRQyxHQUFSLENBQVksUUFBWjs7QUFFQUYsSUFBRUcsY0FBRjs7QUFFQSxNQUFJQyxLQUFLTixFQUFFLElBQUYsRUFBUU8sSUFBUixDQUFhLElBQWIsQ0FBVDs7QUFFQUosVUFBUUMsR0FBUixDQUFZRSxFQUFaOztBQUVBTixJQUFFLDhCQUFGLEVBQWtDTyxJQUFsQyxDQUF1QyxJQUF2QyxFQUE2Q0QsRUFBN0M7QUFFRCxDQVpEOztBQWVBTixFQUFFLDhCQUFGLEVBQWtDQyxLQUFsQyxDQUF3QyxZQUFXO0FBQy9DLE1BQUlLLEtBQUtOLEVBQUUsSUFBRixFQUFRTyxJQUFSLENBQWEsSUFBYixDQUFUOztBQUVBSixVQUFRQyxHQUFSLENBQVlKLEVBQUUsSUFBRixFQUFRTyxJQUFSLEVBQVo7QUFDQVIsUUFBTVMsR0FBTixDQUFVUixFQUFFLGlCQUFpQk0sRUFBakIsR0FBc0IsSUFBeEIsQ0FBVixFQUF5Q0csTUFBekMsR0FBa0RDLElBQWxEO0FBQ0FDLGNBQVksUUFBWixFQUFzQkwsRUFBdEI7QUFFSCxDQVBEOztBQVVBTixFQUFFLDJCQUFGLEVBQStCQyxLQUEvQixDQUFxQyxZQUFXOztBQUc5Qzs7QUFFQTs7QUFFQTs7QUFFQSxNQUFJVyxRQUFRWixFQUFFLGFBQUYsRUFBaUJhLElBQWpCLENBQXNCLDRCQUF0QixFQUFvREMsR0FBcEQsRUFBWjtBQUNBLE1BQUlDLGNBQWNmLEVBQUUsYUFBRixFQUFpQmEsSUFBakIsQ0FBc0Isa0NBQXRCLEVBQTBEQyxHQUExRCxFQUFsQjs7QUFFQSxNQUFJUixLQUFLVSxTQUFTakIsTUFBTVMsR0FBTixDQUFVLE9BQVYsRUFBbUJELElBQW5CLEdBQTBCLENBQTFCLENBQVQsSUFBeUMsQ0FBbEQ7QUFDQSxNQUFJVSxVQUFXbEIsTUFBTVMsR0FBTixDQUFVLE9BQVYsRUFBbUJELElBQW5CLEdBQTBCVyxHQUExQixFQUFmOztBQUVBLE1BQU1DLFFBQVEsd0JBQWQ7O0FBRUFGLFlBQVVBLFFBQVFHLE9BQVIsQ0FBZ0JELEtBQWhCLEVBQXVCLE9BQUtiLEVBQUwsR0FBUSxJQUEvQixDQUFWOztBQUVBLE1BQUllLFVBQVV0QixNQUFNUyxHQUFOLENBQVVjLEdBQVYsQ0FBZSxDQUFDaEIsRUFBRCxFQUFLTSxLQUFMLEVBQVksTUFBWixFQUFvQkcsV0FBcEIsRUFBaUNFLE9BQWpDLENBQWYsRUFBMkRQLElBQTNELEdBQWtFYSxJQUFsRSxFQUFkOztBQUVBdkIsSUFBR3FCLE9BQUgsRUFBYUcsSUFBYixDQUFrQixTQUFsQixFQUE0QmxCLEVBQTVCLEVBQWdDbUIsR0FBaEMsQ0FBb0MsT0FBcEMsRUFBNkMsS0FBN0M7O0FBRUF0QixVQUFRQyxHQUFSLENBQVlpQixPQUFaOztBQUdBVixjQUFZLE1BQVosRUFBb0IsRUFBcEIsRUFBd0JDLEtBQXhCLEVBQStCRyxXQUEvQjtBQUdELENBN0JEOztBQWlDQSxJQUFNSixjQUFjLFNBQWRBLFdBQWMsQ0FBQ2UsTUFBRCxFQUFzQztBQUFBLE1BQTdCcEIsRUFBNkIsdUVBQTFCLEVBQTBCO0FBQUEsTUFBdEJxQixJQUFzQjtBQUFBLE1BQWhCWixXQUFnQjs7O0FBRXhELE1BQU1hLE1BQU0sZ0NBQVo7QUFDQSxNQUFNQyxjQUFjLFNBQXBCOztBQUVBO0FBQ0EsTUFBSUMsUUFBUSxFQUFaO0FBQ0EsVUFBUUosTUFBUjtBQUNFLFNBQU0sS0FBTjtBQUFjSSxjQUFRLFNBQVIsQ0FBbUI7QUFDakMsU0FBTSxNQUFOO0FBQWVBLGNBQVEsU0FBUixDQUFtQjtBQUNsQyxTQUFNLEtBQU47QUFBY0EsY0FBUSxVQUFSLENBQW9CO0FBQ2xDLFNBQU0sUUFBTjtBQUFpQkEsY0FBUSxVQUFSLENBQW9CO0FBSnZDLEdBS0M7O0FBRUQsTUFBTUMsVUFBVTtBQUNkLGNBQVUsa0JBREk7QUFFZCxvQkFBZ0I7QUFGRixHQUFoQjs7QUFLQTtBQUNBQyxRQUFNSixNQUFNRSxLQUFOLEdBQWN4QixFQUFwQixFQUF3QjtBQUN0Qm9CLFlBQVFBLE1BRGM7QUFFdEJLLGFBQVNBLE9BRmE7QUFHdEJFLFVBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNuQnZCLGFBQU9lLElBRFk7QUFFbkJaLG1CQUFhQTtBQUZNLEtBQWY7QUFIZ0IsR0FBeEIsRUFPR3FCLElBUEgsQ0FPUTtBQUFBLFdBQVlqQyxRQUFRQyxHQUFSLENBQVlpQyxRQUFaLENBQVo7QUFBQSxHQVBSO0FBUUQsQ0E1QkQiLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFJlZmVyZW5jaW5nIG91ciB0YWJsZS5cbnZhciB0YWJsZTtcblxuJCgnLmRlbGV0ZS1lbnRyeScpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblxuICBjb25zb2xlLmxvZygnZGVsZXRlJylcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xuXG4gIGNvbnNvbGUubG9nKGlkKVxuXG4gICQoJy5kZWxldGUtcGxheWJvb2stZW50cnktbW9kYWwnKS5kYXRhKCdpZCcsIGlkKTtcblxufSk7XG5cblxuJCgnLmRlbGV0ZS1wbGF5Ym9vay1lbnRyeS1tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcblxuICAgIGNvbnNvbGUubG9nKCQodGhpcykuZGF0YSgpKVxuICAgIHRhYmxlLnJvdygkKCd0cltkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpKS5yZW1vdmUoKS5kcmF3KCk7XG4gICAgc2VuZFJlcXVlc3QoJ0RFTEVURScsIGlkKVxuXG59KTtcblxuXG4kKCcuYWRkLXBsYXlib29rLWVudHJ5LW1vZGFsJykuY2xpY2soZnVuY3Rpb24oKSB7XG5cblxuICAvLyBnZXQgZGF0YSBmcm9tIG1vZGFsXG5cbiAgLy8gc2VuZCBkYXRhIHRvIGRiXG5cbiAgLy8gcmVmcmVzaCB0aGUgcGFnZSBcblxuICB2YXIgdGl0bGUgPSAkKCcuZm9ybS1ncm91cCcpLmZpbmQoJ2lucHV0W3BsYWNlaG9sZGVyPVwiVGl0bGVcIl0nKS52YWwoKTtcbiAgdmFyIGRlc2NyaXB0aW9uID0gJCgnLmZvcm0tZ3JvdXAnKS5maW5kKCdpbnB1dFtwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCJdJykudmFsKCk7XG5cbiAgdmFyIGlkID0gcGFyc2VJbnQodGFibGUucm93KCc6bGFzdCcpLmRhdGEoKVswXSkgKyAxXG4gIHZhciBhY3Rpb25zID0gKHRhYmxlLnJvdygnOmxhc3QnKS5kYXRhKCkucG9wKCkpXG5cbiAgY29uc3QgcmVnZXggPSAvKDxhIGRhdGEtaWQ9XCIpXFxkKihcIikvZ207XG5cbiAgYWN0aW9ucyA9IGFjdGlvbnMucmVwbGFjZShyZWdleCwgXCIkMVwiK2lkK1wiJDJcIilcblxuICB2YXIgcm93Tm9kZSA9IHRhYmxlLnJvdy5hZGQoIFtpZCwgdGl0bGUsICd5ZWV0JywgZGVzY3JpcHRpb24sIGFjdGlvbnNdICkuZHJhdygpLm5vZGUoKVxuXG4gICQoIHJvd05vZGUgKS5hdHRyKCdkYXRhLWlkJyxpZCkuY3NzKCdjb2xvcicsICdyZWQnKVxuXG4gIGNvbnNvbGUubG9nKHJvd05vZGUpXG5cblxuICBzZW5kUmVxdWVzdCgnUE9TVCcsICcnLCB0aXRsZSwgZGVzY3JpcHRpb24pXG5cblxufSk7XG5cblxuXG5jb25zdCBzZW5kUmVxdWVzdCA9IChtZXRob2QsIGlkPScnLCBpdGVtLCBkZXNjcmlwdGlvbikgPT4ge1xuXG4gIGNvbnN0IEFQSSA9ICdodHRwczovL2Rlbi1wbGF5Ym9va3MuYXBwL2FwaS8nO1xuICBjb25zdCBJTkRFWF9RVUVSWSA9ICdlbnRyaWVzJ1xuXG4gIC8vIERlY2lkZSBlbmRwb2ludC5cbiAgbGV0IFFVRVJZID0gJyc7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAoJ0dFVCcpOiBRVUVSWSA9ICdlbnRyaWVzJzsgYnJlYWs7XG4gICAgY2FzZSAoJ1BPU1QnKTogUVVFUlkgPSAnZW50cmllcyc7IGJyZWFrO1xuICAgIGNhc2UgKCdQVVQnKTogUVVFUlkgPSAnZW50cmllcy8nOyBicmVhaztcbiAgICBjYXNlICgnREVMRVRFJyk6IFFVRVJZID0gJ2VudHJpZXMvJzsgYnJlYWs7XG4gIH07XG5cbiAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfTtcblxuICAvLyBTZW5kIHJlcXVlc3QuXG4gIGZldGNoKEFQSSArIFFVRVJZICsgaWQsIHtcbiAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHRpdGxlOiBpdGVtLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgfSlcbiAgfSkudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2N1c3RvbS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///52\n");

/***/ })

/******/ });