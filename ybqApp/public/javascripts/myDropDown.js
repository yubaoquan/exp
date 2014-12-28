//这个jquery的方法不用了,这种方法不熟,后续研究研究;
// (function (a) {
//   a.fn.my_dropdown = function () {
//     var o = a(this);
//     var wholeMenu = o.children('div').children('ul');
//     var parentItems = wholeMenu.children("li");
//     console.log('length:' + parentItems.length);
//     // if (wholeMenu.length === 0 || parentItems.length === 0) {
//     //   console.info("Require menu content");
//     //   return null;
//     // }

//     o.click(
//       function () {
//         if (o.attr('status') === 'closed') {
//           // console.info('slideDown');
//           parentItems.slideDown("fast");
//           o.attr('status', 'opened');
//           return false;
//         }
//       }
//     );

//     $(document).click(function (event) {
//       // console.info(o.attr('status'));
//       if (o.attr('status') === 'opened') {
//         // console.info('slide up');
//         parentItems.slideUp("fast");
//         o.attr('status', 'closed');
//       }
//     });
//   };
// }(jQuery));

// $(function () {
//   $("#myDropDown").my_dropdown();
//   // console.info('here');
// });

//用这个方法
function initDropDown(a) {
  o = $(a);
  var wholeMenu = o.children('div').children('ul');
  var parentItems = wholeMenu.children("li");
  console.log('from initDropDown length:' + parentItems.length);
    // if (wholeMenu.length === 0 || parentItems.length === 0) {
    //   console.info("Require menu content");
    //   return null;
    // }

  o.click(
    function () {
      if (o.attr('status') === 'closed') {
        // console.info('slideDown');
        parentItems.slideDown("fast");
        o.attr('status', 'opened');
        return false;
      }
    }
  );

  $(document).click(function (event) {
    // console.info(o.attr('status'));
    if (o.attr('status') === 'opened') {
      // console.info('slide up');
      parentItems.slideUp("fast");
      o.attr('status', 'closed');
    }
  });
}