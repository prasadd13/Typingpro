const lessons = {
  lesson1: {
    easy: [
      "a s d f a s d f a s d f", 
      "aa ss dd ff sa ds fd as df sd ss dd", 
      "a a s s d d f f a s d f"
    ],
    medium: [
      "s d s a f a s f", 
      "ss sa ds f d sd sa ss df", 
      "dsa asd sad fds sas dss das", 
      "s d f d s f a s d s a"
    ],
    hard: [
      "a s d f", 
      "a s a d f f", 
      "a s d f space", 
      "s f d a s d f d f d", 
      "d a f s f d s a f d s"
    ]
  },

  lesson2: {
    easy: [
      "j k l j k l j k l", 
      "jj kk ll jj kk ll", 
      "j j k k l l j k l"
    ],
    medium: [
      "k j l k j l", 
      "j l j k k l l j j k", 
      "j j l l k k j l k", 
      "k l j k j l k j"
    ],
    hard: [
      "j k l space", 
      "j j k l space k k l j", 
      "k l j space l j k j l", 
      "j k space l j k space l", 
      "j k l ; space j l k"
    ]
  },

  lesson3: {
    easy: [
      "a s d f j k l ; a s d f j k l ;", 
      "aa ss dd ff jj kk ll ;;", 
      "a j k ; d f s l"
    ],
    medium: [
      "a s j k d f l ;", 
      "a j s k d l f ; j k a s f d ; l", 
      "s a j k ; l d f space s f j l ;", 
      "d f a s j l k ; j f"
    ],
    hard: [
      "a s d f space j k l ; space d f j k a s ; l", 
      "s d j k l ; f space a s d j k ; l f a space", 
      "j l ; f s d a k space j f ; a l k d s space", 
      "a j s f ; k l space d s j a k f ; l d a", 
      "k j f l ; s d f space j a s"
    ]
  },

  lesson4: {
    easy: [
      "g h j g h j g h j", 
      "gg hh jj gg hh jj", 
      "g g h h j j g h j"
    ],
    medium: [
      "g j h g h j", 
      "g h h j h g j h g", 
      "h h g g j j g h j", 
      "g h g j h h j g"
    ],
    hard: [
      "g h j g h j", 
      "g h j h j g h j g h", 
      "h g j h g j h g j", 
      "g j g j h h g j g h", 
      "h j g h j h g j h j"
    ]
  },

  lesson5: {
    easy: [
      "; ' ; ' ; ' ; '", 
      ";; '' ;; '' ;; ''", 
      "; ; ' ' ; ' ;"
    ],
    medium: [
      "' ; ' ; ; '", 
      "; ; ' ' ; ' ;", 
      "; ' ; ; ' ; ; '", 
      "' ; ; ' ; ; ' ;"
    ],
    hard: [
      "' ; ; ' ; ' ; ;", 
      "' ' ; ; ; ' ' ;", 
      "; ' ; ' ; ; ' ' ;", 
      "' ; ' ; ; ' ; ' ;", 
      "; ; ' ; ; ' ; ' ;"
    ]
  },

  lesson6: {
    easy: [
      "; ; ; ; ; ; ; ; ; ;", 
      ";; ;; ;; ;; ;; ;;", 
      "; ; ; ; ; ; ; ; ; ;"
    ],
    medium: [
      "; ; : ; ; : ; ;", 
      "; : ; : ; ; : ; ; :", 
      ": ; : ; : ; : ;", 
      ": ; ; : ; : ; :"
    ],
    hard: [
      ": ; : ; : ; : ; : ;", 
      "; : ; : : ; : ; : ; :", 
      ": : ; ; : ; : ; : : ;", 
      "; : ; : ; : ; : ; :", 
      ": ; : ; ; : ; : ; :"
    ]
  },

  lesson7: {
    easy: [
      "a s d f g a s d f g a s d f g", 
      "a a s s d d f f g g", 
      "a s d f g g f d s a"
    ],
    medium: [
      "q a w s e d r f t g", 
      "a s d f q w e r t g", 
      "q w e r a s d f t g", 
      "w e r t q a s d f g"
    ],
    hard: [
      "q a w s e d r f t g", 
      "a q s w d e f r g t", 
      "q w e r t g f d s a", 
      "g f d s a q w e r t", 
      "t r e w q a s d f g"
    ]
  },

  lesson8: {
    easy: [
      "y u i o p y u i o p y u i o p", 
      "yy uu ii oo pp", 
      "y y u u i i o o p p"
    ],
    medium: [
      "y u i y o p u i", 
      "p o i u y y u i o p", 
      "u u y y i i o o p p", 
      "y u o i y p u i o"
    ],
    hard: [
      "y u i o p u i o p y", 
      "u y o i p y i u o y p", 
      "y y u u i i o o p p", 
      "p o i u y p o i y u", 
      "o i u y p o i y u p"
    ]
  },

  lesson9: {
    easy: [
      "z x c v b z x c v b z x c v b", 
      "zz xx cc vv bb", 
      "z x c v b b v c x z"
    ],
    medium: [
      "z x z c v b x c", 
      "z v x b c z x v b c", 
      "z x c v z x b c v", 
      "z x c v b c x z b v"
    ],
    hard: [
      "z x c v b x z v c b", 
      "v c x z b c v x z b", 
      "b v c x z z x c v b", 
      "z x v b c v z x c b", 
      "x v z b c x z c b v"
    ]
  },

  lesson10: {
    easy: [
      "n m , . n m , . n m , .", 
      "nn mm ,, ..", 
      "n n m m , , . ."
    ],
    medium: [
      "n m , . n , m .", 
      "m , . n n , m .", 
      "n , . m m , . n", 
      "m n , . , n m ."
    ],
    hard: [
      "n m , . ? . , m n", 
      "m , n . ? n , . m", 
      "n m , . n m , . ?", 
      ", . ? n m , . ? n m", 
      "m . , ? n m , ? ."
    ]
  },

  lesson11: {
    easy: [
      "1 2 3 4 5 1 2 3 4 5", 
      "11 22 33 44 55", 
      "1 1 2 2 3 3 4 4 5 5"
    ],
    medium: [
      "1 2 1 3 4 5", 
      "5 4 3 2 1 2 3 4 5", 
      "1 3 2 4 5 1 2", 
      "2 4 1 3 5 1 2"
    ],
    hard: [
      "1 2 3 4 5 5 4 3 2 1", 
      "1 3 2 4 1 5 3 2 4 5", 
      "5 3 1 2 4 1 2 3 4 5", 
      "1 2 3 4 5 4 3 2 1 5", 
      "2 3 4 5 1 5 2 4 3 1"
    ]
  },

  lesson12: {
    easy: [
      "6 7 8 9 0 6 7 8 9 0", 
      "66 77 88 99 00", 
      "6 6 7 7 8 8 9 9 0 0"
    ],
    medium: [
      "6 7 6 8 9 0", 
      "0 9 8 7 6 7 8 9 0", 
      "6 8 7 9 0 6 7", 
      "7 9 6 8 0 7 6"
    ],
    hard: [
      "6 7 8 9 0 0 9 8 7 6", 
      "6 8 7 9 6 0 8 7 9 0", 
      "0 8 6 7 9 6 7 8 9 0", 
      "6 7 8 9 0 9 8 7 6 0", 
      "7 6 9 8 0 6 9 7 8 0"
    ]
  },

  lesson13: {
    easy: [
      "! @ # $ % ! @ # $ %", 
      "!! @@ ## $$ %%", 
      "! ! @ @ # # $ $ % %"
    ],
    medium: [
      "! @ ! # $ %", 
      "% $ # @ ! @ # $", 
      "@ ! # % $", 
      "! # @ $ %"
    ],
    hard: [
      "! @ # $ % % $ # @ !", 
      "! # @ $ % # @ ! $ %", 
      "% ! $ # @ ! @ # $ %", 
      "! ! @ @ # # $ $ % %", 
      "@ ! $ % # @ $ % ! #"
    ]
  },

  lesson14: {
    easy: [
      "^ & * ( ) ^ & * ( )", 
      "^^ && ** (( ))", 
      "^ ^ & & * * ( ( ) )"
    ],
    medium: [
      "^ & ^ * ( )", 
      ") ( * & ^ & * (", 
      "^ * & ( )", 
      "( * ^ ) & *"
    ],
    hard: [
      "^ & * ( ) ) ( * & ^", 
      "* ^ & ( ) ^ * & ( )", 
      "^ * ) ( & * ^ ) & (", 
      "^ ^ & & * * ( ( ) )", 
      "* ( ^ & ) * & ( ) ^"
    ]
  },

  lesson15: {
    easy: [
      "< > / [ ] { } < > / [ ]", 
      "<< >> // [[ ]] {{ }}", 
      "< < > > / / [ [ ] ]"
    ],
    medium: [
      "< > < / [ ]", 
      "{ } [ ] < > /", 
      "/ < > [ { } ]", 
      "< [ ] / { } >"
    ],
    hard: [
      "< > / [ ] { } } { ] [ / > <", 
      "{ [ < > ] } / / < > [ ]", 
      "/ { < } [ > ] < / [ ]", 
      "< < > > / / [ [ ] ] { { } }", 
      "[ < { } ] / < [ ] > /"
    ]
  }
};
