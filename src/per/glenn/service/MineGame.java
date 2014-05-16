package per.glenn.service;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import per.glenn.modules.PgSize;
import per.glenn.modules.Pixel;
import per.glenn.modules.Playground;

public class MineGame extends HttpServlet {
	
	@Override
	public void doGet(HttpServletRequest req,
					HttpServletResponse resp)
					throws IOException, ServletException{
		Playground pg = new Playground(PgSize.MEDIUM);
		pg.init();
		Pixel[][] pixels = pg.getPixels();
		req.setAttribute("rows", pixels);
		RequestDispatcher view = req.getRequestDispatcher("mine_game.jsp");
		view.forward(req, resp);
		
	}

}
