set -g theme_powerline_fonts yes
set -g theme_color_scheme zenburn
set -g theme_display_git_master_branch yes
set -g theme_display_user yes

function mkcd
  mkdir $argv
  and cd $argv
end

alias c='code .'
alias cl=clear
alias ga='git add'
alias gaa='git add --all'
alias gb='git branch'
alias gcb='git checkout -b'
alias gcd='git checkout develop'
alias gcm='git checkout master'
alias gcmsg='git commit -m'
alias gco='git checkout'
alias gf='git fetch'
alias ggpull='git pull origin $git_branch_name'
alias ggpush='git push origin $git_branch_name'
alias gl='git pull'
alias gl='git log --color --graph --pretty=format:"%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%C(bold blue)<%an>%Creset" --abbrev-commit'
alias glog='git log --oneline --decorate --graph'
alias gloga='git log --oneline --decorate --graph --all'
alias gnap='git add -N . && git add -p'
alias gp='git push'
alias gpristine='git reset --hard && git clean -dfx'
alias gr='git remote'
alias grb='git rebase'
alias grbi='git rebase -i'
alias gst='git status'
alias history=omz_history
alias l='ls -lah'
alias ls='ls -G'
alias hb='hub browse'