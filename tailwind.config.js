module.exports = {
    theme: {
      extend: {
        fontFamily: {
          'press-start': ['"Press Start 2P"', 'cursive'],
        },
      },
    },
  };
  
  $(document).ready(function() {
    $("#btnFetch").click(function() {
      // disable button
      $(this).prop("disabled", true);
      // add spinner to button
      $(this).html(
        '<i class="fa fa-circle-o-notch fa-spin"></i> loading...'
      );
    });
});