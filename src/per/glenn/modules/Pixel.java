package per.glenn.modules;

import java.util.Map;

public class Pixel {
	
	private PixelType type;
	private Map<String, Object> properties;
	
	public Pixel(PixelType type, Map<String, Object> properties){
		this.type = type;
		this.properties = properties;
	}

	public PixelType getType() {
		return type;
	}

	public void setType(PixelType type) {
		this.type = type;
	}

	public Map<String, Object> getProperties() {
		return properties;
	}

	public void setProperties(Map<String, Object> properties) {
		this.properties = properties;
	}
	
	
}
