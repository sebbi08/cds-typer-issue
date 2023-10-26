namespace stuff;

type MyEnum : String enum {
    MyEnumA;
    MyEnumB;
}

entity Books {
    title    : String;
    myEnum : MyEnum;
}
