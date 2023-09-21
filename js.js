Dani Krossing

<script>
    // Declaring Variables

     var a;
     a = 10;

     var A;
     A = "HelloWorld";

    var Gilbert = "Gilbert";

    //Examples

     var a = 10;
     var b = 20;
     var c = a + b;
     console.log(c);

    //Data Types
    //1. Strings
    var name = "Echo love";
    var num = "413124";

    //2.Numbers
    var num = 291340;
    var num2 = -27311;

    //3.Boolean
    var Boolean1 = 1;(true)
    var Boolean2 = 0;(false)

    //4.Undefined
    var hey;

    //5.Null
    var hey2 = null;

    //Operators
    var age = 21;
    var my = "I am "+age+" Year\'s Old";
    console.log(my);

    //Conditions Statements
    var a = 43;
    var b = 20;

    if (a != 45) {
        console.log('Hello World');
    }

    //Examples
    var gender = "male";
    var age = 16;

    if (gender != "male") {
        console.log("Hello World");
    } if (gender == "male") {
        console.log("I am a Tanzanian aged " + age + " Years Old");
    } else {
        console.log("undefined");
    }

    //Arrays
     var a = ['love', 4, true]

     a[1] = 21; //Changes The value of Array indexed 1 to 21

      console.log(a [1]);

    //Properties And Methods
   // 1.Properties
    var items = "kiss of love";
    console.log(items.length);

    //2. Methods
     var markets = "kariakoo kisutu magomeni";
     console.log(markets.indexOf("kisutu")); // Prints Out The character Position

    var markets = "kariakoo kisutu magomeni";
    console.log(markets.replace("kisutu", "mwananyamala"));

    var markets = ["kariakoo", 4, false]
    console.log(markets.join(",  "));

    var markets = ["kariakoo", 4, false]
    markets.push("love"); //Adds up a new string defined
    console.log(markets);

    //Functions
   // 1. Name Functions
    function satisfy() {
        var name = "My name is Gilbert";
        console.log(name);
    }

    satisfy();

    //OR

    function satisfy() {
        var name = "My name is Gilbert";
        return name;
    }

    console.log(satisfy());

    function satisfy(a) {
        var name = "My name is " +a;
        return name;
    }

    var my = "joseph";
    console.log(satisfy(my));

    //2.Anonymous Functions
     var studio = function () {
        var password = "What's The Password";
          return password;
     }

     console.log(studio());

    //OR

     var studio = function (a) {
       var password = "The password is " +a;
         return password
     }

     var a = "Null";
     console.log(studio(a));

    //3.Invocked Functions
       (function () {
          var name = "My name";
            console.log(name);
        }())

    //Scopes
    //1.Global Scope
    var num = 200;

    function calc() {
        return num;
    }

    console.log(calc());

    //2.Local scope
    function calc() {
        var name = "Gilbert";
        return name;
    }

    console.log(calc());

    //3.Function Scope
    function spice() {
        var a = "dagaa";
        return a; //Not Included In Browsers
    }
    console.log(spice());

    //Objects
    //Examples
    let person1 = {    //Person1 is the Object
        name: "Gilbert", //name,age,city are Properties
        Age: 23,
        City: "Arusha",

        updateAge: function () { //UpdateAge is the Method
            return ++ person1.Age
        }

    }
</script>

<br />Net Ninja <br />

<script>
    //JS BuiltIn Function
    alert('Hello World');

    //1.Statements
    var Age = 5;

    if (Age >= 18 && Age <= 30) { //And Operator(Double Amber-some Sign)
        console.log("Welcomed");
    } else  {
        console.log("Not Welcomed");
    }

    if (Age < 18 || Age > 30) {  //Or Operator(Double Pipes Sign)
        document.write("Next");
    } else {
        document.write("Pass");
    }

    while (Age < 10) {
        console.log("Hello");
        Age++;
    }
    document.write("Love");

    //2.Functions
    function getAverage(a, b) {

        var average = (a + b) / 2
        console.log(average);
        return average;

    }

    document.write((5, 6));

    //3.Numbers
    console.log(Math.round(5.6));

    console.log(Math.max(3,6,8,4,2));

    console.log(Math.PI);

    //4.Not A Number
    var a = 5;
    var b = 7;

    if (isNaN(a)) {
        console.log("Wrong Data Type");
    } else {
        console.log((a*b) + " Year's Old");
    }

    // 5.Objects
    //     (i).Objects Without Methods.
    const Gilbert = new Object();
    Gilbert.secondname = "Munuo";
    Gilbert.lastname = "Fredrick";

    console.log(Gilbert.secondname);

    // (ii).Objects With Methods.
    const Gilbert = new Object();
    Gilbert.secondname = "Munuo";
    Gilbert.age = 21;
    Gilbert.updateAge = function (a, b) {
        console.log(a + b);
    }
    Gilbert.updateAge("I ", "Love You");

    // 6.This Keyword
    const Gilbert = {
        firstname: "Gilbert",
        secondname: "Munuo",
        Names: function HisName() {
            console.log("He is " + this.firstname);
        }
    };

    Gilbert.Names();
</script>

<script>
    // Javascript OOP NetNinja

    // Exaple Of An Object

    var UserOne = {
        email: 'email@gmail.com',
        password: '12345',
   /*Method*/ login() {
    console.log("user Loged in");

    },
   /*Method*/  logout() {
    console.log(this.email, "loged out");
        }
    }

    document.write(UserOne.email);



    //Example Of Class Constructer

    class user {
        //Constructer Function Creates New Object
        constructor(email, name) {
            this.email = email;
            this.name = name;
        }
        login() { //Method login
            console.log(this.email, 'just logged in');
        }
    }

    var userOne = new user('officialgilbert', 'gilbertmunuotz');
    var userTwo = new user('joshcoe', 'josh95');

    console.log(userOne);
    console.log(userTwo);

    userOne.login();


    //Method Chaining

    class user {
        constructor(email, phone) {
            this.email = email;
            this.phone = phone;
            this.address = 0;
        }
        login() {
            console.log(this.email, 'just logged in');
            return this;
        }
        times() {
            this.address++;
            console.log(this.email, 'logged in', this.address);
            return this;
        }
    }

    var name1 = new user('gilbert@gmail.com', ' +25428732012');
    var name2 = new user('joshcoe@gmail.com', '+25567492342');

    name1.login().times();




    // Classes Inheritance

    class Father {
        constructor(name, birthyear, currentyear) {
            this.name = name;
            this.birthyear = birthyear;
            this.currentyear = currentyear;
        }
        calcAgeF() {
            console.log(this.currentyear - this.birthyear);
            return this;
        }
    }

    class Son extends Father {
        constructor(name, birthyear, currentyear, age) {
            super(name, birthyear, currentyear);
            this.age = age;
        }
        calcAgeS() {
            return this.calcAgeF();
        }
    }

    const john = new Son('john', '2000', '2023');



   // Constructors

    function user(email, name) {
        this.email = email;
        this.name = name;
        this.login = function () {
            console.log(this.name, 'has logged in');
        }
    }

    var name1 = new user('gilbert@gmail.com', ' Gilbert');
    var name2 = new user('joshcoe@gmail.com', 'Josh');

    console.log(name1);
    name2.login();


  //  JS OOP Prototypes
    


</script>