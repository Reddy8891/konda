import java.lang.reflect.Type;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static java.lang.Class.forName;

public class Demo {
    public static void main(String... args) throws ClassNotFoundException, SQLException {
        forName("com.mysql.cj.jdbc.Driver");
        String url = "jdbc:mysql://localhost:3306/reddy";
        String user = "root";
        String password = "root@123";
        Connection con = DriverManager.getConnection(url, user, password);
        String str="{call new_procedure(?,?,?)}";
        //List<UserName> userNameList=new ArrayList<>();
       // UserName userName=new UserName();
        try {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter account no you want to search:");
            int acc_no = sc.nextInt();
            System.out.println("enter month");
            int m = sc.nextInt();
            CallableStatement cs = con.prepareCall(str);
            cs.setDouble(1, acc_no);
            cs.setInt(2, m);
            cs.registerOutParameter(3, Types.DOUBLE);
            cs.execute();

            double due_amt =cs.getDouble(3);
            due_amt=due_amt-due_amt*0.05;



            //int month = cs.getInt(3);

            System.out.println("due_amt: " +  due_amt);
        }catch (SQLException e){
            e.printStackTrace();
        }

    }
}