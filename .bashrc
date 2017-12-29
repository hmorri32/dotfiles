export NVM_DIR="/Users/hugh/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm" # Load RVM into a shell session *as a function*


eval "$(rbenv init -)"

alias tb1="cd turing/be/mod-1"
alias tf="cd turing/fe/"
alias tf1="cd turing/fe/mod-1"
alias tf2="cd turing/fe/mod-2"
alias tf3="cd turing/fe/mod-3"
alias tf4="cd turing/fe/mod-4"
alias mkcd='_(){ mkdir $1; cd $1; }; _'
