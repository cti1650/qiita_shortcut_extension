const shorcutChecker = (defaultFunc = () => {}, searchFunc) => {
  const url = location.href;
  if (~url.indexOf('https://qiita.com/search')) {
    if (searchFunc) {
      searchFunc();
    } else {
      defaultFunc();
    }
  } else {
    defaultFunc();
  }
};

(() => {
  shorcutChecker(
    () => {
      console.log('Qiita Page');
    },
    () => {
      console.log('Qiita SearchPage');
      // const Ele = document.querySelectorAll('h1.searchResult_itemTitle a');
      // Ele &&
      //   Array.from(Ele).forEach((item) => {
      //     console.log('<< ' + item.innerText + ' >>  ' + item.href);
      //   });
    }
  );
  shortcut.add('Ctrl+F', function () {
    const Ele = document.querySelectorAll('input[name="q"]');
    shorcutChecker(
      () => {
        Ele[0].focus();
      },
      () => {
        Ele[2].focus();
      }
    );
  });
  shortcut.add('Ctrl+Right', function () {
    const Ele = document.querySelector('a.js-next-page-link');
    shorcutChecker(() => {
      if (Ele) {
        Ele.click();
      } else {
        console.log('not Next Page');
      }
    });
  });
  shortcut.add('Ctrl+Left', function () {
    const Ele = document.querySelector('a.js-previous-page-link');
    shorcutChecker(() => {
      if (Ele) {
        Ele.click();
      } else {
        console.log('not Previous Page');
      }
    });
  });
})();
