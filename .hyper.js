// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'canary',
    fontSize: 12,
    fontFamily: '"Meslo LG S for Powerline"',
    // fontFamily: '"Inconsolata-g for Powerline", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BLOCK',
    cursorBlink: false,
    foregroundColor: '#fff',
    // backgroundColor: '#000',
	cursorColor: '#fffff',
	selectionColor: 'rgba(224, 239, 254,0.3)',

    // custom css to embed in the main window
    css: `
      .terms_19b1ydh {margin-top: 20px;}
      .header_windowHeader {
        display: none;
      }
      .tabs_nav {
        top: 0;
      }
      .terms_terms {
        margin-top: 0;
      }
      .terms_termsShifted {
        margin-top: 30px;
      }
    `,

    // custom css to embed in the terminal window
  //   termCSS: `
  //   x-screen x-row {
  //     line-height: initial;
  //   }
  // `,

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 3px 10px 5px',
    // padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    // colors: {
    //   black: '#000000',
    //   red: '#ff0000',
    //   green: '#33ff00',
    //   yellow: '#ffff00',
    //   blue: '#0066ff',
    //   magenta: '#cc00ff',
    //   cyan: '#00ffff',
    //   white: '#d0d0d0',
    //   lightBlack: '#808080',
    //   lightRed: '#ff0000',
    //   lightGreen: '#33ff00',
    //   lightYellow: '#ffff00',
    //   lightBlue: '#0066ff',
    //   lightMagenta: '#cc00ff',
    //   lightCyan: '#00ffff',
    //   lightWhite: '#ffffff',
    // },


    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // Powershell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: 'zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // for advanced config flags please refer to https://hyper.is/#cfg
    paneNavigation: {
      hotkeys: {
        navigation: {
          up: 'command+alt+up',
          down: 'command+alt+down',
          left: 'command+alt+left',
          right: 'command+alt+right',
        },
        jump_prefix: 'command+alt', // completed with 1-9 digits
      },
      showIndicators: false, // Show pane number
    },
    hyperline: {
      plugins: ['ip', 'memory', 'cpu', 'network', 'battery'],
    },
	confirmQuit: true,
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  plugins: [
    'hypercwd',
    'hyper-simple-highlight-active-session',
    // 'hyper-altair',
    // 'hyperterm-monokai',
    // 'hyper-ayu-mirage',
    // 'hyper-captain-sweetheart',
    'hyperterm-chesterish',
    'hyper-pane',
    'hyper-search',
    'hyperterm-cursor',
    'hyperline',
    'hyper-confirm',
    'hyper-final-say',
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};
