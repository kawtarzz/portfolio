import { useEffect } from "react";
import $ from "jquery";

const ProgressScroll = () => {
  // Progress Bar functionality
  useEffect(() => {
    const handleScroll = () => {
      const progressBar = $(".progressbar");
      if (!progressBar.length) return;

      const hT = progressBar.offset()?.top;
      const hH = progressBar.outerHeight();
      const wH = $(window).height();
      const wS = $(window).scrollTop();

      if (wS > hT + hH - wH) {
        $(".progress-bar").each(function () {
          $(this)
            .find(".progress-content")
            .animate(
              {
                width: $(this).attr("data-percentage"),
              },
              2000
            );

          $(this)
            .find(".progress-number-mark")
            .animate(
              { left: $(this).attr("data-percentage") },
              {
                duration: 2000,
                step: function (now, fx) {
                  var data = Math.round(now);
                  $(this)
                    .find(".percent-bar")
                    .html(data + "%");
                },
              }
            );
        });
      }
    };

    $(window).on("scroll", handleScroll);
    return () => $(window).off("scroll", handleScroll);
  }, []);

  return null;
};

export default ProgressScroll;
