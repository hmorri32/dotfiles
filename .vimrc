"" ===== Smallest reasonable configuration =====
set nocompatible                " Behave more usefully at the expense of backwards compatibility (this line comes first b/c it alters how the others work)
set encoding=utf-8              " Format of the text in our files (prob not necessary, but should prevent weird errors)
filetype plugin on              " Load code that configures vim to work better with whatever we're editing
filetype indent on              " Load code that lets vim know when to indent our cursor
syntax on                       " Turn on syntax highlighting
set backspace=indent,eol,start  " backspace through everything in insert mode
set expandtab                   " When I press tab, insert spaces instead
set shiftwidth=2                " Specifically, insert 2 spaces
set tabstop=2                   " When displaying tabs already in the file, display them with a width of 2 spaces

"" ===== Aesthetics =====
set t_Co=256        " Explicitly tell vim that the terminal supports 256 colors (iTerm2 does, )
set background=dark " Tell vim to use colours that works with a dark terminal background (opposite is "light")
set laststatus=2    " Always show the statusline
set nowrap          " Display long lines as truncated instead of wrapped onto the next line
set cursorline      " Colour the line the cursor is on
set number          " Show line numbers
set hlsearch        " Highlight search matches