package per.glenn.tags;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import per.glenn.modules.Pixel;

public class RowsTag extends SimpleTagSupport {
	
	private Pixel[][] rows;
	
	public void setRows(Pixel[][] rows){
		this.rows = rows;
	}
	
	public void doTag() throws JspException, IOException {
		for(int i=0; i<rows.length; i++){
			getJspContext().setAttribute("row", rows[i]);
			getJspContext().setAttribute("row_id", i);
			getJspBody().invoke(null);
		}
	}

}
