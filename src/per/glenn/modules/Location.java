package per.glenn.modules;

public class Location {
	
	protected int row;
	protected int column;
	
	public Location(int row, int col){
		this.row = row;
		this.column = col;
	}
	
	@Override
	public int hashCode(){
		return row*1000 + column;
	}
	
	@Override
	public boolean equals(Object obj){
		if(obj == null || getClass() != obj.getClass())
			return false;
		Location loc = (Location) obj;
		return (this.row == loc.row) && (this.column == loc.column);
		
	}
}
