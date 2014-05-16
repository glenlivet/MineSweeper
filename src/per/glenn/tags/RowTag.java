package per.glenn.tags;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import per.glenn.modules.Pixel;

public class RowTag extends SimpleTagSupport {
	
	private Pixel[] row;
	
	public void setRow(Pixel[] row){
		this.row = row;
	}
	
	public void doTag() throws JspException, IOException {
		for(int i=0; i<row.length; i++){
			String _type = row[i].getType().toString(); 
			getJspContext().setAttribute("type", _type);
			Integer _num = new Integer(0);
			if(_type.equalsIgnoreCase("HINT")){
				_num = (Integer) row[i].getProperties().get("number");
			}
			getJspContext().setAttribute("num", _num);
			getJspContext().setAttribute("col_id", i);
			getJspBody().invoke(null);
		}
	}

}
