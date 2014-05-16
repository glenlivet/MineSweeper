package per.glenn.modules;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Playground {
	
	private Pixel[][] pixels;
	private PgSize size;
	private Set<Location> mines;
	
	public Playground(PgSize size){
		this.size = size;
		this.pixels = new Pixel[size.getRow()][size.getColumn()];
		this.mines = new HashSet<Location>();
	}
	
	public Playground(){
		this(PgSize.SMALL);
	}
	
	public Pixel[][] getPixels(){
		return this.pixels;
	}
	
	public void init(){
		//set all pixels to empty
		for(int r=0; r<size.getRow(); r++)
			for(int c=0; c<size.getColumn(); c++)
				pixels[r][c] = new Pixel(PixelType.EMPTY, null);
				
		//set mines randomly
		generateMines();
		//set hints
		generateHints();
		//
	}
	
	private void generateMines(){
		int minesNum = size.getMinesNum();
		int mined = mines.size();
		while(mined < minesNum){
			int _row = (int) (Math.random()*size.getRow());
			int _col = (int) (Math.random()*size.getColumn());
			Location _loc = new Location(_row, _col);
			if(mines.add(_loc)){
				mined++;
			}
		}
		for(Location loc : mines){
			pixels[loc.row][loc.column].setType(PixelType.MINE);
		}
	}
	
	private void generateHints(){
		//set hints
		for(Location loc : mines){
			int _row = loc.row;
			int _col = loc.column;
			for(int r = _row - 1; r <= _row + 1; r++)
				for(int c = _col - 1; c <= _col + 1; c++){
					if(r >= 0 && c >= 0 && 
					   r < size.getRow() && c < size.getColumn()){
					    if(pixels[r][c].getType() == PixelType.EMPTY){
					    	pixels[r][c].setType(PixelType.HINT);
					    	Map<String, Object> _props = new HashMap<String, Object>();
					    	_props.put("number", new Integer(1));
							pixels[r][c].setProperties(_props);
							continue;
					    }
					    if(pixels[r][c].getType() == PixelType.HINT){
							Map<String, Object> _props = pixels[r][c].getProperties();
							int num = (Integer) _props.get("number");
							num++;
							_props.put("number", new Integer(num));
							continue;
						}
					}
					
				}
		}
	}
	
	private void print(){
		for(int r=0; r<size.getRow(); r++){
			for(int c=0; c<size.getColumn(); c++){
				PixelType _pt = pixels[r][c].getType();
				String _str = "";
				switch(_pt){
				case EMPTY: 
					_str = "E";
					break;
				case HINT:
					_str = ((Integer) pixels[r][c].getProperties().get("number")).toString();
					break;
				case MINE:
					_str = "M";
					break;
				}
				System.out.print(_str + " ");
			}
			System.out.println("");
		}
	}
	/*
	public static void main(String[] argv){
		Playground pg = new Playground(PgSize.MEDIUM);
		pg.init();
		pg.print();
	}
	*/
}
