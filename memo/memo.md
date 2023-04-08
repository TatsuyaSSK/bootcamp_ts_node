# 2
- constの使い方を調べる。まずはconst typescriptで調べてみる
- 折角なのでTypeScript Handbookで調べながら読んでみる
- constは変数への再代入が禁止されている
- a++とすると、aという値に+1して再代入することになる
- こうなるとダメなので、aをletで宣言する
- そもそも、型としてvar, let, constの違いは何なのか？ 
    - varは関数以外で制限された場合グローバルスコープとなる
    - varは再宣言できるし更新もできる
    - varは変数の宣言が巻き上げられる
    - 再代入あるのは困るんだなー
    - let is block scoped
    - letは再代入はできるが再宣言はできない
    - letなら誤って関数の外にある変数に再代入してしまうことはない
    - letもhoistingはされる
    - constは再代入も再宣言もされない
    - 

var declarations are globally scoped or function scoped while let and const are block scoped.
var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
While var and let can be declared without being initialized, const must be initialized during declaration.

# 3
- async, awaitの記法について理解する