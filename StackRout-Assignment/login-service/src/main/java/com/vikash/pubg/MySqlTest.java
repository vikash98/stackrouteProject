package com.vikash.pubg;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class MySqlTest {
	
		public static void main(String args[]){  
		try{  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/pubg","root","password");  
		//here sonoo is database name, root is username and password  
		Statement stmt=con.createStatement();  
		ResultSet rs=stmt.executeQuery("select * from role");  
		while(rs.next())  
		System.out.println(rs.getString(2));  
		con.close();  
		}catch(Exception e){ System.out.println(e);}  
		}  
		
}
