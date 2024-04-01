(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    // just some regular React component
    const MyInputComponent = () => {
      const currentPathname = window.location.pathname;

      // const newUrl = `${currentPathname}/upload-image`;
      const urlParts = currentPathname.split("/");

      // Get the id from the URL
      const id = urlParts[urlParts.length - 2];
      const newUrl = "http://localhost:3000/uploadImage/" + id;
      return /*#__PURE__*/React__default.default.createElement("a", {
        href: newUrl
      }, "Upload image");
    };

    const SendMessage = () => {
      // const currentPathname = window.location.pathname;

      // console.log(currentPathname);

      return /*#__PURE__*/React__default.default.createElement("p", null, "Hi");
    };

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.MyInput = MyInputComponent;
    AdminJS.UserComponents.SendMessage = SendMessage;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9pbWFnZS1pbnB1dC5qc3giLCIuLi9zZW5kLW1lc3NhZ2UuanN4IiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG4vLyBqdXN0IHNvbWUgcmVndWxhciBSZWFjdCBjb21wb25lbnRcclxuY29uc3QgTXlJbnB1dENvbXBvbmVudCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgLy8gY29uc3QgbmV3VXJsID0gYCR7Y3VycmVudFBhdGhuYW1lfS91cGxvYWQtaW1hZ2VgO1xyXG4gICAgY29uc3QgdXJsUGFydHMgPSBjdXJyZW50UGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG5cclxuLy8gR2V0IHRoZSBpZCBmcm9tIHRoZSBVUkxcclxuY29uc3QgaWQgPSB1cmxQYXJ0c1t1cmxQYXJ0cy5sZW5ndGggLSAyXTtcclxuY29uc3QgbmV3VXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXBsb2FkSW1hZ2UvXCIgKyBpZDtcclxuICAgIHJldHVybihcclxuPGEgaHJlZj17bmV3VXJsfT5VcGxvYWQgaW1hZ2U8L2E+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15SW5wdXRDb21wb25lbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTZW5kTWVzc2FnZSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFBhdGhuYW1lKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgPHA+SGk8L3A+ICAgICBcclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbmRNZXNzYWdlIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgTXlJbnB1dCBmcm9tICcuLi9pbWFnZS1pbnB1dCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuTXlJbnB1dCA9IE15SW5wdXRcbmltcG9ydCBTZW5kTWVzc2FnZSBmcm9tICcuLi9zZW5kLW1lc3NhZ2UnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlNlbmRNZXNzYWdlID0gU2VuZE1lc3NhZ2UiXSwibmFtZXMiOlsiTXlJbnB1dENvbXBvbmVudCIsImN1cnJlbnRQYXRobmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1cmxQYXJ0cyIsInNwbGl0IiwiaWQiLCJsZW5ndGgiLCJuZXdVcmwiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiU2VuZE1lc3NhZ2UiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJNeUlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBSUE7SUFDQSxNQUFNQSxnQkFBZ0IsR0FBR0EsTUFBTTtJQUUzQixFQUFBLE1BQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQTs7SUFFaEQ7SUFDQSxFQUFBLE1BQU1DLFFBQVEsR0FBR0osZUFBZSxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7O0lBRS9DO01BQ0EsTUFBTUMsRUFBRSxHQUFHRixRQUFRLENBQUNBLFFBQVEsQ0FBQ0csTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQ3hDLEVBQUEsTUFBTUMsTUFBTSxHQUFHLG9DQUFvQyxHQUFHRixFQUFFLENBQUE7TUFDcEQsb0JBQ0pHLHNCQUFBLENBQUFDLGFBQUEsQ0FBQSxHQUFBLEVBQUE7SUFBR0MsSUFBQUEsSUFBSSxFQUFFSCxNQUFBQTtJQUFPLEdBQUEsRUFBQyxjQUFlLENBQUMsQ0FBQTtJQUVqQyxDQUFDOztJQ2hCRCxNQUFNSSxXQUFXLEdBQUdBLE1BQU07SUFFdEI7O0lBRUE7O0lBRUEsRUFBQSxvQkFDQ0gsc0JBQUEsQ0FBQUMsYUFBQSxDQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUcsSUFBSyxDQUFDLENBQUE7SUFHZCxDQUFDOztJQ1pERyxPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFLENBQUE7SUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEdBQUdBLGdCQUFPLENBQUE7SUFFeENGLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDRixXQUFXLEdBQUdBLFdBQVc7Ozs7OzsifQ==
