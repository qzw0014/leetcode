class Test {
    public static void main(String[] args) {
        StringBuilder testString = new StringBuilder("");
        testString.insert(0, "wqmmn");
        System.out.println(testString.toString());
        testString.insert(testString.length() - 1, "uuu");
        System.out.println(testString.toString());
    }

    class InnerClass {
        
    }
}